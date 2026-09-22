import {usecContext} from 'react';
import {ReservaContext} from '../context/ReservaContext';

export default function useReserva() {
    const context = useContext(ReservaContext);
    if (!context) {
        throw new Error('useReserva debe de usarse dentroo de <ReservaProvider>');
    }
    return context;
};