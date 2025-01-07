export const Mission = () => {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center scroll-section">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Guardian IO is the first-ever platform designed to leverage decentralized intelligence, 
            multi-sensory interfaces, and community-driven insights to achieve ethical and sustainable change.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Decentralized Knowledge</h3>
              <p className="text-muted-foreground">
                Connect localized hubs of information to foster a global flow of ethical practices.
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">AI-Guided Collaboration</h3>
              <p className="text-muted-foreground">
                Intelligent, ethical agents provide actionable recommendations for strategic impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};