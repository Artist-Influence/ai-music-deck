import GlassPanel from '../GlassPanel';

interface CaseStudySlideProps {
  category: string;
  description: string;
}

const CaseStudySlide = ({ category, description }: CaseStudySlideProps) => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col justify-center">
    <div className="absolute top-[15%] right-[10%] w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[130px] animate-float" />

    <div className="relative z-10">
      <p className="text-lg text-primary font-medium mb-4 tracking-wider uppercase">Case Study</p>
      <h1 className="text-6xl font-bold text-foreground mb-3">Proof, not promises.</h1>
      <p className="text-2xl text-muted-foreground mb-12">{category}</p>
      <p className="text-lg text-muted-foreground/70 mb-12 max-w-[600px]">{description}</p>

      <div className="grid grid-cols-3 gap-6 max-w-[900px] mb-10">
        {[['—', 'Views generated'], ['—', 'Engagement rate'], ['—', 'Streaming lift']].map(([val, label], i) => (
          <GlassPanel key={i} variant="bright" className="text-center p-6">
            <p className="text-5xl font-bold text-primary mb-2">{val}</p>
            <p className="text-sm text-muted-foreground">{label}</p>
          </GlassPanel>
        ))}
      </div>

      <GlassPanel variant="subtle" className="max-w-[900px]">
        <p className="text-muted-foreground/50 text-base">
          📎 Case study materials — artist image, performance screenshots, and detailed metrics — will be added here.
        </p>
      </GlassPanel>
    </div>
  </div>
);

export default CaseStudySlide;
