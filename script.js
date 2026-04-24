/*
  BCA MUNDA UI - Main JavaScript
  This file demonstrates how scripts could be organized separately
*/

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const categoryLinks = document.querySelectorAll('.nav-category');
const componentCards = document.querySelectorAll('.component-card');

// Theme Toggle Functionality
function initThemeToggle() {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        if (body.classList.contains('light-theme')) {
            themeToggle.textContent = '☀️ Light Mode';
        } else {
            themeToggle.textContent = '🌙 Dark Mode';
        }
    });
}

// Category Filtering
function initCategoryFiltering() {
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Update active class
            categoryLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            const category = link.getAttribute('data-category');
            
            // Filter components
            componentCards.forEach(card => {
                if (category === 'all') {
                    card.style.display = 'block';
                } else {
                    const cardCategory = card.getAttribute('data-category');
                    if (cardCategory === category) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
}

// Component Interactions
function initComponents() {
    // View code buttons
    document.querySelectorAll('.view-code-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            alert('In a full implementation, this would show the source code for the component.');
        });
    });
    
    // Toggle switches
    document.querySelectorAll('.toggle-switch input, .bouncy-toggle input').forEach(toggle => {
        toggle.addEventListener('change', function() {
            console.log('Toggle switched:', this.checked);
        });
    });
    
    // Other component interactions would be added here
}

// Initialize the application
function init() {
    initThemeToggle();
    initCategoryFiltering();
    initComponents();
    
    // Log initialization
    console.log('BCA MUNDA UI Components Loaded');
}

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Export functions for potential reuse
// (This would work in a module system)
window.BCAUI = {
    initThemeToggle,
    initCategoryFiltering,
    initComponents,
    init
};