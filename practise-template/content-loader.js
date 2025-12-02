// Content Loader - Obfuscated HTML Injection
// This file contains encoded HTML content that will be injected at runtime

(function() {
    'use strict';

    // Base64 encoded dashboard content
    // This is the main content area that will be injected
    const encodedContent = 'PGRpdiBjbGFzcz0iY29udGFpbmVyLWZsdWlkIHAtMCIgc3R5bGU9Im1hcmdpbi10b3A6IDU2cHg7Ij4KICAgICAgICA8IS0tIFN0YXRzIFNlY3Rpb24gLS0+CiAgICAgICAgPHNlY3Rpb24gaWQ9InN0YXRzIiBjbGFzcz0icHktNSBiZy1kYXJrIHRleHQtd2hpdGUgcG9zaXRpb24tcmVsYXRpdmUiPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJjb250YWluZXIiPgogICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0icm93IHRleHQtY2VudGVyIiBkYXRhLWFvcz0iZmFkZS11cCI+CiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iY29sLW1kLTMgbWItNCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InAtNCBib3JkZXIgYm9yZGVyLXNlY29uZGFyeSByb3VuZGVkLTMgYmctZ3JhZGllbnQtZGFyayI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9ImRpc3BsYXktNCBmdy1ib2xkIHRleHQtcHJpbWFyeSI+MTI8L2gyPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9InRleHQtdXBwZXJjYXNlIGxldHRlci1zcGFjaW5nLTIiPkNvdXJzZXMgQ29tcGxldGVkPC9wPgogICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wtbWQtMyBtYi00Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0icC00IGJvcmRlciBib3JkZXItc2Vjb25kYXJ5IHJvdW5kZWQtMyBiZy1ncmFkaWVudC1kYXJrIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz0iZGlzcGxheS00IGZ3LWJvbGQgdGV4dC1zdWNjZXNzIj44NSU8L2gyPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9InRleHQtdXBwZXJjYXNlIGxldHRlci1zcGFjaW5nLTIiPkF2ZXJhZ2UgR3JhZGU8L3A+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImNvbC1tZC0zIG1iLTQiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJwLTQgYm9yZGVyIGJvcmRlci1zZWNvbmRhcnkgcm91bmRlZC0zIGJnLWdyYWRpZW50LWRhcmsiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPSJkaXNwbGF5LTQgZnctYm9sZCB0ZXh0LWluZm8iPjQ1PC9oMj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJ0ZXh0LXVwcGVyY2FzZSBsZXR0ZXItc3BhY2luZy0yIj5UYXNrcyBGaW5pc2hlZDwvcD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iY29sLW1kLTMgbWItNCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InAtNCBib3JkZXIgYm9yZGVyLXNlY29uZGFyeSByb3VuZGVkLTMgYmctZ3JhZGllbnQtZGFyayI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9ImRpc3BsYXktNCBmdy1ib2xkIHRleHQtd2FybmluZyI+MzwvaDI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz0idGV4dC11cHBlcmNhc2UgbGV0dGVyLXNwYWNpbmctMiI+Q2VydGlmaWNhdGVzPC9wPgogICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0iY3VzdG9tLXNoYXBlLWRpdmlkZXItYm90dG9tLTE2ODU2Mzg1NDMiPgogICAgICAgICAgICAgICAgPHN2ZyBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEyMDAgMTIwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzIxLjM5LDU2LjQ0YzU4LTEwLjc5LDExNC4xNi0zMC4xMywxNzItNDEuODYsODIuMzktMTYuNzIsMTY4LjE5LTE3LjczLDI1MC40NS0uMzlDODIzLjc4LDMxLDkwNi42Nyw3Miw5ODUuNjYsOTIuODNjNzAuMDUsMTguNDgsMTQ2LjUzLDI2LjA5LDIxNC4zNCwzVjBIMFYyNy4zNUE2MDAuMjEsNjAwLjIxLDAsMCwwLDMyMS4zOSw1Ni40NFoiIGNsYXNzPSJzaGFwZS1maWxsIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L3N2Zz4KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9zZWN0aW9uPgogICAgPC9kaXY+';

    // Decode and inject content
    function injectContent() {
        try {
            // Decode Base64
            const decodedHTML = atob(encodedContent);
            
            // Find the body tag and inject content
            const body = document.body;
            
            // Create a temporary container
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = decodedHTML;
            
            // Insert the content after the navbar
            const navbar = document.querySelector('nav');
            if (navbar && navbar.nextSibling) {
                navbar.parentNode.insertBefore(tempDiv.firstChild, navbar.nextSibling);
            } else {
                body.appendChild(tempDiv.firstChild);
            }
            
        } catch (error) {
            console.error('Content injection failed');
        }
    }

    // Inject content when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectContent);
    } else {
        injectContent();
    }

})();
