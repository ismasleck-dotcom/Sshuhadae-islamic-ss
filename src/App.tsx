/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TimetablePrayerWidget } from './components/TimetablePrayerWidget';
import { AcademicsSection } from './components/AcademicsSection';
import { CampusFacilities } from './components/CampusFacilities';
import { AdmissionsCalculator } from './components/AdmissionsCalculator';
import { StudentPortalPreview } from './components/StudentPortalPreview';
import { PrincipalMessage } from './components/PrincipalMessage';
import { NewsAndEvents } from './components/NewsAndEvents';
import { Footer } from './components/Footer';
import { ApplicationModal } from './components/ApplicationModal';
import { CampusVisitModal } from './components/CampusVisitModal';

export default function App() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [isVisitOpen, setIsVisitOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col selection:bg-emerald-800 selection:text-white">
      {/* Navigation & Header */}
      <Navbar
        onOpenApply={() => setIsApplyOpen(true)}
        onOpenVisit={() => setIsVisitOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenApply={() => setIsApplyOpen(true)}
          onOpenVisit={() => setIsVisitOpen(true)}
        />

        {/* Daily Schedule & Prayer Rhythm */}
        <TimetablePrayerWidget />

        {/* Academics & Dual Curriculum */}
        <AcademicsSection />

        {/* Campus Facilities & Laboratories */}
        <CampusFacilities />

        {/* Admissions & Tuition Estimator */}
        <AdmissionsCalculator
          onOpenApply={() => setIsApplyOpen(true)}
        />

        {/* Student & Parent Portal Live Demo */}
        <StudentPortalPreview />

        {/* Principal's Letter & School Creed */}
        <PrincipalMessage />

        {/* Announcements & Academic Calendar */}
        <NewsAndEvents />
      </main>

      {/* Footer */}
      <Footer
        onOpenApply={() => setIsApplyOpen(true)}
        onOpenVisit={() => setIsVisitOpen(true)}
      />

      {/* Interactive Modals */}
      <ApplicationModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
      />

      <CampusVisitModal
        isOpen={isVisitOpen}
        onClose={() => setIsVisitOpen(false)}
      />
    </div>
  );
}
