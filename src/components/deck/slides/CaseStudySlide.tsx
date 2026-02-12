import GlassPanel from '../GlassPanel';
import subClip1 from '@/assets/subtronics-clip1.jpg';
import subClip2 from '@/assets/subtronics-clip2.jpg';
import subClip3 from '@/assets/subtronics-clip3.jpg';

const clipImages = [subClip1, subClip2, subClip3];

const CaseStudySlide = () => (
  <div className="w-full h-full bg-background relative overflow-hidden p-24 flex flex-col items-center justify-center">
    <div className="absolute top-[15%] right-[10%] w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[130px] animate-float" />

    <div className="relative z-10 w-full max-w-[1400px] mx-auto">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-6xl font-bold text-foreground mb-4">Proof, not promises.</h1>
        <p className="text-xl text-muted-foreground mb-12">Case study — Fan Page Growth</p>
      </div>

      <div className="grid grid-cols-2 gap-8 max-w-[1200px] mx-auto">
        {/* Left column — details */}
        <GlassPanel variant="bright" className="p-8 flex flex-col">
          <p className="text-sm text-primary font-mono mb-4 tracking-widest">CASE STUDY</p>
          <p className="text-3xl font-bold text-foreground">Subtronics</p>
          <p className="text-sm text-muted-foreground/60 mb-6">Client: Red Light Management</p>

          <div className="space-y-3 mb-6">
            <p className="text-sm text-muted-foreground">
              <span className="text-primary font-medium">Goal:</span> Scale Subtronics' fandom beyond bass music through themed fan accounts in line with his Coachella debut + Fibonacci multi-genre album
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="text-primary font-medium">Services:</span> Fan Page Management
            </p>
          </div>

          <p className="text-sm text-primary font-medium mb-2">Strategy</p>
          <ol className="list-decimal list-inside space-y-1.5 text-sm text-muted-foreground">
            <li>Live tour set highlights</li>
            <li>K-Pop-style slice of life content</li>
            <li>Snippets from interviews &amp; production livestreams</li>
            <li>News about upcoming releases &amp; events</li>
          </ol>
        </GlassPanel>

        {/* Right column — clips + metrics */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm text-primary font-medium mb-3">Sample clips</p>
            <div className="grid grid-cols-3 gap-3">
              {clipImages.map((img, i) => (
                <div key={i} className="aspect-[9/16] rounded-xl bg-white/[0.06] border border-white/[0.08] overflow-hidden flex items-center justify-center">
                  {img ? (
                    <img src={img} alt={`Subtronics clip ${i + 1}`} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-xs text-muted-foreground/40">Clip {i + 1}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <GlassPanel variant="bright" className="p-6">
            <p className="text-sm text-primary font-medium mb-4">Results</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { val: '5,000,000+', label: 'Views' },
                { val: '150,000+', label: 'Likes' },
                { val: '15,000+', label: 'Followers' },
                { val: '600+', label: 'Clips' },
              ].map((m) => (
                <div key={m.label} className="bg-white/[0.04] rounded-lg p-3 text-center">
                  <p className="text-lg font-bold text-foreground">{m.val}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{m.label}</p>
                </div>
              ))}
            </div>
          </GlassPanel>
        </div>
      </div>
    </div>
  </div>
);

export default CaseStudySlide;
