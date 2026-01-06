import Image from 'next/image';
import { ImageWithSizeOverlay } from './image-with-size-overlay';
import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';
import { getNetlifyContext } from 'utils';

export const metadata = {
    title: 'Founding Team'
};

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section>
                <h2>The founding team combines healthcare domain expertise with hands-on software delivery experience.</h2>   
                <h1>Nouman Saeed — Founder & CEO</h1>
                <h3>Founder & CEO with 18+ years of experience in healthcare digital transformation and enterprise system delivery. Strong background in ERP implementations, project management, and regulated environments. Leads product vision, execution, and cross-functional coordination for Logis-Health</h3>
                <h1>Syed Hussnain Sajid — Founder & CTO</h1>
                <h3>Founder & CTO with 7 years of experience in healthcare technology, delivering digital solutions for home care, urgent care, and telemedicine. My work includes NPHIES-compliant systems, SaaS platforms, AI booking automation, data warehousing with Airflow and MinIO, ETL pipelines, Kafka integrations, and payments</h3>
            </section>
        </div>
            )};
