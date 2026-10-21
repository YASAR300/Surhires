import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import Accordion from '@/components/ui/Accordion';
import { faqs } from '@/data/faqs';

export default function FaqSection() {
  return (
    <Section bg="white" id="faq">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <Badge variant="teal">Frequently Asked Questions</Badge>
          <h2 className="text-h2 text-[#0B1F3A]">Everything You Need to Know</h2>
          <p className="text-body text-[#64748B]">
            Transparent answers about vetting, candidate privacy, pricing models, and our hiring guarantee.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion items={faqs} />
        </div>
      </Container>
    </Section>
  );
}
