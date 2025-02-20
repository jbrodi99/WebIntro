import { useState } from 'react';
import styles from '../styles/FunctionMachine.module.css'

export default function FunctionMachine() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('Salida');
    const [processing, setProcessing] = useState(false);

    const processFunction = () => {
        setProcessing(true);
        setTimeout(() => {
            setProcessing(false);
            setOutput(`Salida: ${input * 2}`);
        }, 2000);
    };

    return (
        <div className={styles.container}>
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Ingrese un número"
            />
            <button onClick={processFunction}>Ejecutar Función</button>
            
            <div className={styles.input}>Entrada: {input}</div>
            <div className={styles.arrow}>⬇️</div>
            <div className={`${styles.machine} ${processing ? styles.processing : ''}`}>Máquina de Función</div>
            <div className={styles.arrow}>⬇️</div>
            <div className={styles.output}>{output}</div>
        </div>
    );
}
