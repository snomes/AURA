
import { Card } from 'components/card';
import { Markdown } from 'components/markdown';

export const metadata = {
    title: 'AURA - Product'
};
 
const explainer = `
   <ul><li>AURA is a healthcare ERP and care-continuity platform designed to digitally connect hospitals, home care providers, and telemedicine services into a single interoperable ecosystem. The platform addresses fragmentation in post-hospital care by enabling structured, secure, and automated continuity of care beyond hospital walls.</li>
   <li>AURA follows a modular, service-oriented architecture optimized for interoperability, regulatory compliance, and scalability across European healthcare systems.</li>
   <li>Healthcare ERP Core (Odoo): Acts as the system of record for patients, digital care plans, home nursing tasks, telemedicine encounters, and provider operations, extended with healthcare-specific modules.</li>
   <li>Workflow & Integration Layer (Apache Airflow): Orchestrates all cross-system and asynchronous processes such as hospital discharge ingestion, care-plan automation, telemedicine follow-ups, and external EHR synchronization with full auditability.</li>
   <li>Secure Data & Analytics Layer (MinIO + Power BI): Provides a healthcare data lake for structured clinical datasets, care activity logs, compliance extracts, and delivers operational and clinical analytics dashboards.</li>
`;

export default function Page()  {
    return (
        <div className="max-w-3xl mx-auto space-y-6 py-10 px-4">
            <Card title={"AURA"}>
                <Markdown>{explainer}</Markdown>
            </Card>
        </div>
    );
}