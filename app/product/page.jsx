
import { Card } from 'components/card';
import { Markdown } from 'components/markdown';

export const metadata = {
    title: 'AURA - Product'
};
 
const explainer = `
   AURA is a healthcare ERP and care-continuity platform designed to digitally connect hospitals, home care providers, and telemedicine services into a single interoperable ecosystem. The platform addresses fragmentation in post-hospital care by enabling structured, secure, and automated continuity of care beyond hospital walls.

   AURA follows a modular, service-oriented architecture optimized for interoperability, regulatory compliance, and scalability across European healthcare systems.
   
   Healthcare ERP Core (Odoo): Acts as the system of record for patients, digital care plans, home nursing tasks, telemedicine encounters, and provider operations, extended with healthcare-specific modules.
   
   Workflow & Integration Layer (Apache Airflow): Orchestrates all cross-system and asynchronous processes such as hospital discharge ingestion, care-plan automation, telemedicine follow-ups, and external EHR synchronization with full auditability.
   
   Secure Data & Analytics Layer (MinIO + Power BI): Provides a healthcare data lake for structured clinical datasets, care activity logs, compliance extracts, and delivers operational and clinical analytics dashboards.
`;

export default function Page() {
  return (
    <>
      {/* HERO */}
      

      {/* 2-column section */}
          <div className="flex flex-col gap-12 sm:gap-16">
            <section>
              <h2>Product Overview</h2>
              <Markdown content={explainer} />
            </section>
               </div>
         
      

       

      
    </>
  );
}