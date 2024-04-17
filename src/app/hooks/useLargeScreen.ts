import { useState, useEffect } from 'react';

export function useLargeScreen() {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth > 900);
        };

        // Vérifiez la taille de l'écran lors du chargement initial
        checkScreenSize();

        // Écoutez les changements de taille de la fenêtre
        window.addEventListener('resize', checkScreenSize);

        // Supprimez l'écouteur d'événement lorsque le composant est démonté
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    return isLargeScreen;
}
