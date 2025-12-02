// Advanced Anti-Cheat Script - Comprehensive Protection
// WARNING: These are client-side protections and can be bypassed

(function() {
    'use strict';

    // ===== 1. DISABLE RIGHT-CLICK (CONTEXT MENU) =====
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });

    // ===== 2. DISABLE KEYBOARD SHORTCUTS =====
    document.addEventListener('keydown', function(e) {
        // F12 - DevTools
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }

        // Ctrl+Shift+I - DevTools (Inspect)
        if (e.ctrlKey && e.shiftKey && e.key === 'I') {
            e.preventDefault();
            return false;
        }

        // Ctrl+Shift+J - DevTools (Console)
        if (e.ctrlKey && e.shiftKey && e.key === 'J') {
            e.preventDefault();
            return false;
        }

        // Ctrl+U - View Source
        if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
            return false;
        }

        // Ctrl+Shift+C - DevTools (Element Picker)
        if (e.ctrlKey && e.shiftKey && e.key === 'C') {
            e.preventDefault();
            return false;
        }

        // Ctrl+S - Save Page
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            return false;
        }

        // Ctrl+P - Print (can be used to view source)
        if (e.ctrlKey && e.key === 'p') {
            e.preventDefault();
            return false;
        }
    });

    // ===== 3. DISABLE TEXT SELECTION & COPYING =====
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
        return false;
    });

    document.addEventListener('copy', function(e) {
        e.preventDefault();
        return false;
    });

    document.addEventListener('cut', function(e) {
        e.preventDefault();
        return false;
    });

    // CSS-based selection prevention
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    document.body.style.mozUserSelect = 'none';
    document.body.style.msUserSelect = 'none';

    // ===== 4. DEVTOOLS DETECTION (WINDOW SIZE METHOD) =====
    let devtoolsOpen = false;
    const threshold = 160;

    const checkDevTools = function() {
        // Only check if DevTools hasn't been detected yet
        if (!devtoolsOpen) {
            const widthThreshold = window.outerWidth - window.innerWidth > threshold;
            const heightThreshold = window.outerHeight - window.innerHeight > threshold;
            
            if (widthThreshold || heightThreshold) {
                devtoolsOpen = true; // Set flag permanently
                handleDevToolsOpen();
            }
        }
    };

    const handleDevToolsOpen = function() {
        // Completely remove all DOM content
        document.documentElement.innerHTML = '';
        document.body.innerHTML = '';
    };

    setInterval(checkDevTools, 500);

    // ===== 6. CONSOLE OVERRIDES =====
    // Disable console methods
    const noop = function() {};
    
    if (window.console) {
        window.console.log = noop;
        window.console.warn = noop;
        window.console.error = noop;
        window.console.info = noop;
        window.console.debug = noop;
        window.console.table = noop;
        window.console.clear = noop;
        window.console.dir = noop;
        window.console.dirxml = noop;
        window.console.trace = noop;
        window.console.group = noop;
        window.console.groupCollapsed = noop;
        window.console.groupEnd = noop;
        window.console.time = noop;
        window.console.timeEnd = noop;
        window.console.profile = noop;
        window.console.profileEnd = noop;
        window.console.count = noop;
        window.console.assert = noop;
    }

    // ===== 7. VIEW-SOURCE DETECTION =====
    if (window.location.protocol === 'view-source:') {
        window.location.href = 'about:blank';
    }

    // ===== 8. DETECT DEVTOOLS VIA PERFORMANCE =====
    // DevTools can slow down performance
    let lastTime = performance.now();
    const checkPerformance = function() {
        const currentTime = performance.now();
        const timeDiff = currentTime - lastTime;
        
        // If execution is significantly slower, DevTools might be open
        if (timeDiff > 200) {
            handleDevToolsOpen();
        }
        
        lastTime = currentTime;
    };

    setInterval(checkPerformance, 100);

    // ===== 9. DETECT WINDOW BLUR (POSSIBLE DEVTOOLS) =====
    let blurCount = 0;
    window.addEventListener('blur', function() {
        blurCount++;
        if (blurCount > 3) {
            // Multiple blurs might indicate DevTools interaction
            // handleDevToolsOpen(); // Uncomment if you want this aggressive
        }
    });

    // ===== 10. PREVENT IFRAME EMBEDDING =====
    if (window.top !== window.self) {
        window.top.location = window.self.location;
    }

    // ===== 11. DETECT FIREBUG =====
    if (window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) {
        handleDevToolsOpen();
    }

    // ===== 12. DETECT CHROME DEVTOOLS (TOSTRING METHOD) =====
    const element = new Image();
    Object.defineProperty(element, 'id', {
        get: function() {
            handleDevToolsOpen();
        }
    });

    // ===== 13. CLEAR CONSOLE PERIODICALLY =====
    setInterval(function() {
        if (window.console && typeof window.console.clear === 'function') {
            // console.clear(); // Already disabled above
        }
    }, 1000);

})();

