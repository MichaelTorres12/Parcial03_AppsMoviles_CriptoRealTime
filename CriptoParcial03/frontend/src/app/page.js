"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Page() {
  const [cryptoStats, setCryptoStats] = useState(null);
  const [prevStats, setPrevStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/crypto-stats');

        // Solo actualiza los valores previos si ya existe un valor en cryptoStats
        if (cryptoStats) {
          setPrevStats(cryptoStats); // Guardar los valores actuales como previos
        }

        setCryptoStats(response.data.data); // Actualizar con los nuevos valores

      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 10000); // Actualiza cada 10 segundos
    return () => clearInterval(interval);
  }, [cryptoStats]);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Crypto Stats</h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-2xl font-semibold">Monedas totales: <span className="text-gray-700">{cryptoStats.totalCoins}</span></p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-2xl font-semibold">Mercado total: <span className="text-gray-700">{cryptoStats.totalMarkets}</span></p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-2xl font-semibold">Total de intercambios: <span className="text-gray-700">{cryptoStats.totalExchanges}</span></p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-2xl font-semibold">
              Total Market Cap: <span className="text-gray-700">{cryptoStats.totalMarketCap}</span>
            </p>
            {prevStats && (
              <p className="text-sm text-gray-500">Anterior: {prevStats.totalMarketCap}</p>
            )}
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-2xl font-semibold">
              Total 24h Volume: <span className="text-gray-700">{cryptoStats.total24hVolume}</span>
            </p>
            {prevStats && (
              <p className="text-sm text-gray-500">Anterior: {prevStats.total24hVolume}</p>
            )}
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-2xl font-semibold">Equivalencia en Bitcoin: <span className="text-gray-700">{cryptoStats.btcDominance}</span></p>
          </div>
        </div>
      )}
    </div>
  );
}
