import PageHero from '../components/PageHero.jsx';
import ApproachSection from '../components/Approach.jsx';
import StatBar from '../components/StatBar.jsx';
import AboutStatement from '../components/AboutStatement.jsx';
import GovernanceSection from '../components/Governance.jsx';
import TrusteesSection from '../components/TrusteesSection.jsx';

export default function About() {
  return (
    <div className="text-left">
      <PageHero title="About Us" crumb="Discover who we are, what we stand for, and how we are working to create a future where everyone has the opportunity to thrive." />

      <AboutStatement />

      <div className="mx-auto max-w-[1126px] px-6 py-10">
        <div className="grid gap-8 py-10 md:grid-cols-2">
          <div className="rounded-sm bg-[var(--accent-bg)] p-10">
            <h2 className="font-styling text-[25px] font-semibold text-[var(--text-h)] md:text-[28px]">Our Mission</h2>

            <p className="mt-5 text-[12px] font-bold tracking-[0.14em] text-[var(--accent)]">
              WHY WE EXIST
            </p>

            <h2 className="font-display mt-2 text-[15px] font-semibold leading-[1.4] text-[var(--text-h)] md:text-[20px]">
              To Advance Dignity and Create Pathways Beyond Homelessness.
            </h2>

            <p className="mt-4 text-[15px] leading-relaxed text-[var(--text)] md:text-[16px]">
              Our mission is to address homelessness through advocacy, skills development, and
              strategic community partnerships while advancing opportunities for people
              experiencing homelessness to rebuild their lives, achieve greater independence,
              and reintegrate into society.
            </p>
          </div>

          <div className="rounded-sm bg-[var(--accent-bg)] p-10">
            <h2 className="font-styling text-[25px] font-semibold text-[var(--text-h)] md:text-[28px]">Our Vision</h2>

            <p className="mt-5 text-[12px] font-bold tracking-[0.14em] text-[var(--accent)]">
              THE FUTURE WE SEEK
            </p>

            <h2 className="font-display mt-2 text-[15px] font-semibold leading-[1.4] text-[var(--text-h)] md:text-[20px]">
              A Nigeria Where Everyone Has a Place to Belong
            </h2>

            <p className="mt-4 text-[15px] leading-relaxed text-[var(--text)] md:text-[16px]">
              We envision a society where homelessness is significantly reduced, every individual is treated with dignity, and people experiencing homelessness have access to the support, opportunities, and pathways they need to secure stable living conditions and participate fully in society.
            </p>
          </div>
        </div>
        

        {/* <div className="mt-8 grid gap-4 pt-17 pb-5 sm:grid-cols-2">
          <img
            src="/Img/campaign-rally.jpg"
            alt=""
            className="h-40 w-full rounded-sm object-cover"
          />
          <div className="relative flex h-40 flex-col justify-center overflow-hidden rounded-sm bg-[var(--accent)] px-6 py-6 text-center">
            <span
                className="pointer-events-none absolute left-4 top-9 font-styling text-[50px] leading-none text-white/70"
                aria-hidden="true"
            >
                "
            </span>
            <p className="font-styling relative text-[20px] md:tetx-[22px] font-medium leading-relaxed text-white">
                Real change happens when people are given the tools to rebuild their lives.
            </p>
            </div>
        </div> */}
      </div>

      <ApproachSection />

      <StatBar />

      <GovernanceSection />

      <TrusteesSection />
    </div>
  )
}