/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import Hero from './Hero';
import Navbar from './Navbar';
import Origin from './Origin';
import TheCore from './TheCore';
import StrategicLayer from './StrategicLayer';
import GrowthLayer from './GrowthLayer';
import OperationLayer from './OperationLayer';
import ChaosLoop from './ChaosLoop';
import MercyMode from './MercyMode';
import Pricing from './Pricing';
import FinalCTA from './FinalCTA';
import Footer from './Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#06B6D4] selection:text-white">
      <Navbar />
      <Hero />
      <Origin />
      <TheCore />
      <StrategicLayer />
      <GrowthLayer />
      <OperationLayer />
      <ChaosLoop />
      <MercyMode />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  );
}
