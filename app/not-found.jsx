import Link from 'next/link';
import { Compass, ArrowRight, Home } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="py-20 md:py-32">
      <Container>
        <div className="max-w-md mx-auto text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-[#0B1F3A] text-[#14B8A6] flex items-center justify-center mx-auto shadow-md">
            <Compass className="w-8 h-8 animate-spin-slow" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-[#0F766E] uppercase tracking-widest">
              Error 404
            </span>
            <h1 className="text-h1 text-[#0B1F3A]">Page Not Found</h1>
            <p className="text-sm text-[#64748B] leading-relaxed">
              The role, company profile, or resource you are looking for has been relocated or no longer exists in our current index.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button href="/" variant="primary" size="md" icon={Home} iconPosition="left">
              Return Home
            </Button>
            <Button href="/jobs" variant="outline" size="md" icon={ArrowRight} iconPosition="right">
              Explore Jobs
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
