import { useState, useEffect } from 'react'
import './style.css'

export const Home = () => {
    const [positionLeft, setPositionLeft] = useState(0)
    const [positionBottom, setPositionBottom] = useState(-4)

    useEffect(() => {
        const handleKeyPress = (event) => {
          if (event.keyCode === 39) {
            setPositionLeft(prevPosition => prevPosition + 1);
          }
        };
    
        document.addEventListener('keydown', handleKeyPress);
    
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
        };
      }, []);

      useEffect(() => {
        const handleKeyPress = (event) => {
          if (event.keyCode === 37) {
            setPositionLeft(prevPosition => prevPosition - 1);
          }
        };
    
        document.addEventListener('keydown', handleKeyPress);
    
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
        };
      }, []);

      useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.keyCode === 38) {
                setPositionBottom(4);
                setPositionLeft(prevPosition => prevPosition + 3);

                // Define um tempo limite de 2 segundos (2000 milissegundos)
                setTimeout(() => {
                    setPositionBottom(-4);
                    setPositionLeft(prevPosition => prevPosition + 3);
                }, 300);
            }
        };

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return(
        <main>
            <div className="personagem" style={{left:`${positionLeft}%`,bottom:`${positionBottom}%`}}></div>
            <button>Left</button>
        </main>
    )
}
