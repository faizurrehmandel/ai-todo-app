// Bot Manager v1 - Generated JavaScript
console.log('🚀 Project loaded successfully!');

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add animation to features
    const features = document.querySelectorAll('.feature');
    
    features.forEach((feature, index) => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            feature.style.transition = 'all 0.6s ease';
            feature.style.opacity = '1';
            feature.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Add click effects
    const cards = document.querySelectorAll('.card, .feature');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    console.log('✨ All animations and interactions loaded!');
});
