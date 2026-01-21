import Link from "next/link";
import { Card } from "components/card";
import { Markdown } from "components/markdown";

export const metadata = {
  title: "Logis-Health | AURA – Healthcare ERP for Home Care Continuity",
  description:
    "AURA is a healthcare ERP platform connecting hospitals, home care providers, and telemedicine into one interoperable post-discharge care system."
};

const hero = `
# Healthcare ERP for Home Care & Telemedicine Continuity

**AURA (Automated Unified Resource Architecture)** connects hospitals, home care providers, and telemedicine services into one interoperable platform—starting with **post-hospital discharge and home nursing coordination** for elderly and chronic patients.

**Built as B2B SaaS • Privacy-by-design (GDPR-aligned) • Interoperability-first**
`;

const problem = `
## The Problem

Hospital systems are increasingly digitized, but once a patient is discharged, care becomes fragmented:

- Home care teams often lack access to hospital context and updated care plans  
- Coordination happens through manual calls, spreadsheets, and disconnected tools  
- This increases administrative workload and contributes to avoidable readmissions
`;

const solution = `
## The Solution

AURA is not a generic telemedicine app. It is **healthcare operations software** designed for continuity of care beyond hospital walls:

- Digital care plans, tasks, and caregiver coordination  
- Remote follow-ups (telemedicine) integrated into workflows  
- Dashboards and reporting for providers and institutions  
- Secure data exchange designed to integrate with hospital systems using widely adopted healthcare interoperability standards
`;

const differentiation = `
## Why AURA is Different

Most tools focus on video consultations. AURA focuses on **operations + continuity**:

- Works for real home care delivery (tasks, visits, coordination, reporting)
- Designed for interoperability with hospital environments
- Built for regulated EU healthcare contexts (privacy-by-design)
`;

const roadmap = `
## Roadmap

- **Months 0–2:** Requirements discovery, workflow mapping, clickable prototype  
- **Months 3–6:** MVP development (core care plans, tasking, coordination, reporting)  
- **Months 6–9:** Pilot deployments with providers (Lithuania / EU)  
- **Months 9–12:** Production-ready v1 and expansion planning
`;

const lithuania = `
## Why Lithuania

Lithuania is an ideal base to build and validate a digital health platform:

- Mature digital public services and advanced eHealth ecosystem  
- Strong software engineering talent and startup environment  
- Strategic location to scale across the Baltics and the wider EU
`;

export default function Page() {
  return (
    <>
      {/* HERO */}
      

      {/* 2-column section */}
      <div className="grid gap-6 mb-10 md:grid-cols-2">
        <Card title="Problem">
          <Markdown content={problem} />
        </Card>

        <Card title="Solution">
          <Markdown content={solution} />
        </Card>
      </div>

      <div className="grid gap-6 mb-10 md:grid-cols-2">
        <Card title="Differentiation">
          <Markdown content={differentiation} />
        </Card>

        <Card title="Roadmap">
          <Markdown content={roadmap} />
        </Card>
      </div>

      <div className="grid gap-6 mb-10 md:grid-cols-2">
        <Card title="Why Lithuania">
          <Markdown content={lithuania} />
        </Card>

        <Card title="Founder">
          <div className="space-y-3">
            <p className="text-sm">
              <strong>Nouman Saeed</strong> — Founder &amp; CEO
            </p>
            <p className="text-sm">
              18+ years experience in digital transformation and healthcare
              systems, combining technical leadership and execution in regulated
              environments.
            </p>
            <p className="text-sm">
              Building Logis-Health as a Lithuania-based company with EU-wide
              scalability.
            </p>
          </div>
        </Card>
      </div>

       

      <footer className="text-xs text-gray-500 pt-6">
        © {new Date().getFullYear()} AURA - Healthcare Continuity Platform. All rights reserved.
      </footer>
    </>
  );
}

