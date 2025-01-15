import { ModeToggle } from '@/components/ModeToggle';
import Section from '@/components/Section';

export default function Header() {
    return (
        <Section
            className={
                'bg-background dark:bg-dark-background sticky top-0 z-50 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-lg border-b border-border dark:border-dark-border py-3'
            }
        >
            <div className="flex justify-between">
                <div className="basis-1/6 flex justify-start items-center">
                    <img className="h-10" src="/logos/logo.svg" alt="" />
                </div>
                <div className="basis-4/6 flex justify-center items-center">
                    <h2>Nav</h2>
                </div>
                <div className="basis-1/6 flex justify-end items-center">
                    <ModeToggle />
                </div>
            </div>
        </Section>
    );
}
