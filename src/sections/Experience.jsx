// IMPORTS
import React, { useState } from 'react';
import './Experience.css';
import ExperienceBelt from '../components/ExperienceBelt.jsx';
import ExperienceStory from '../components/ExperienceStory.jsx';

// COMPONENT
function Experience() {

    const [selectedExperience, setSelectedExperience] = useState(null);

    function handleSelectExperience(item) {
        const match = experiences.find(
            (exp) => exp.title === item.title && exp.company === item.company
        );
        setSelectedExperience(match);
    }

    const experiences = [
        {
            title: "Advisor",
            company: "International Youth Council on Gender Equality",
            duration: "Aug 2025 - Present",
            whatIDid: [
                "Advise on global programs advancing gender equality, targeting 50 countries.",
                "Guide leadership on strategy, program direction, and growth.",
                "Provide input on policy and international collaboration initiatives."
            ],
            howIDid: [
                "Work directly with government officials and UN representatives to align initiatives with global standards.",
                "Review program strategies and offer actionable recommendations.",
                "Mentor youth ambassadors on scaling operations and maximizing impact."
            ],
            impact: [],
            skills: ["Cross-cultural Communication", "Impact Evaluation", "Strategic Advising"],
        },
        {
            title: "Founder & CEO",
            company: "The Pink Stairs",
            duration: "Jun 2024 - Present",
            whatIDid: [
                "Founded a global youth-led nonprofit advancing gender equity, now active in 26 countries.",
                "Built and scaled volunteer programs and internal operations for 250+ volunteers.",
                "Led marketing campaigns reaching 8.4M+ girls."
            ],
            howIDid: [
                "Designed volunteer onboarding, training, and program management systems.",
                "Develop and execute cross-platform marketing strategies.",
                "Organize seasonal campaigns for crisis relief, career growth, and financial literacy."
            ],
            impact: [
                "Delivered 570+ letters and 820+ care packages to survivors.",
                "Educating youth through blogs, magazine, and podcast.",
                "Grew social media following to 10,000+, increasing engagement and awareness."
            ],
            skills: ["Google Workspace", "Growth Strategy", "Slack", "Project Management", "Partner Negotiations"],
        },
        {
            title: "Accounting Intern",
            company: "Skans Accountants",
            duration: "Feb 2024 - Jun 2024",
            whatIDid: [
                "Managed financial records and supported bookkeeping for 15+ clients.",
                "Prepared 10+ personal and corporate tax returns ensuring CRA compliance.",
                "Coordinated property tax rebate claims for residential and commercial clients."
            ],
            howIDid: [
                "Used Excel and QuickBooks to maintain and reconcile financial records.",
                "Reviewed tax forms to identify deductions and maximize refunds."
            ],
            impact: [
                "Ensured 100% compliance with tax regulations.",
                "Recovered $2,000 in property tax rebates.",
                "Streamlined bookkeeping and tax processes for multiple clients."
            ],
            skills: ["QuickBooks", "Microsft Office Suite", "Bookkeeping", "Tax Compliace", "Corporate Accounting"],
        },
        {
            title: "Frontend Supervisor",
            company: "No Frills",
            duration: "Aug 2023 - Mar 2024",
            whatIDid: [
                "Supervised 20+ cashiers and trained employees on POS and cash handling procedures.",
                "Prepared and balanced daily cash reports and bank deposits.",
                "Handled and safeguarded $10,000+ in cash."
            ],
            howIDid: [
                "Implemented standard operating procedures for cash management and security.",
                "Monitored team performance and coached for efficiency and accuracy.",
                "Ensured compliance with company policies and loss prevention measures.",
                "Optimized task delegation for cashiers based on customer flow, balancing workloads."
            ],
            impact: [
                "Reduced $300 in theft attempts and improved accuracy in cash handling.",
                "Saved on average 50% overtime for closing cashiers while maintaining task completion rates.",
                "Developed team skills and knowledge, improving customer experience."
            ],
            skills: ["Customer Service", "Workflow Planning", "POS systems", "Loss Prevention Strategy", "Report Reconciliation", "Team Supervision"],
        },
        {
            title: "Cashier",
            company: "No Frills",
            duration: "Aug 2022 - Jul 2023",
            whatIDid: [
                "Enforced security protocols and company policies while serving 60+ customers per hour.",
                "Memorized and processed 100+ food codes and barcodes efficiently."
            ],
            howIDid: [
                "Used POS systems to scan items, process payments, and manage returns.",
                "Assisted customers with inquiries and ensured smooth checkout operations."
            ],
            impact: [
                "Maintained fast, accurate checkout service and customer satisfaction.",
                "Reduced errors and losses through strict adherence to procedures."
            ],
            skills: ["Customer Service", "Communication", "POS systems", "Cash handling", "Problem-solving"],
        },
    ]

    return (
        <div className="experience">
            <h2>Experience</h2>
            <p>Strategy, problem-solving, and growth in action</p>
            <ExperienceBelt onSelect={handleSelectExperience} />

            {selectedExperience && (
                <div className="modal-overlay">
                    <ExperienceStory
                        experience={selectedExperience}
                        onClose={() => setSelectedExperience(null)}
                    />
                </div>
            )}
        </div>
    );
}

export default Experience;