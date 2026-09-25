import PageHero from '../components/PageHero.jsx';
import StatBar from '../components/StatBar.jsx';

export default function About() {
  return (
    <div className="text-left">
      <PageHero title="About Us" crumb="Discover who we are" />

      <div className="mx-auto max-w-[1126px] px-6 py-10">
        <div className="grid gap-8 py-10 sm:grid-cols-2">
          <div className='bg-[var(--accent-bg)] rounded-sm p-10'>
            <h2 className="font-styling text-[25px] font-semibold text-[var(--text-h)] md:text-[28px]">Our Mission</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-[var(--text)] md:text-[16px]">
              To provide strategies to combat homelessnes and ensure homeless victims are reintegration and accepted into the society.
            </p>
          </div>

          <div className='bg-[var(--accent-bg)] rounded-sm p-10'>
            <h2 className="font-styling text-[25px] font-semibold text-[var(--text-h)] md:text-[28px]">Our Vision</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-[var(--text)] md:text-[16px]">
              To eradicate the problem of homelessness in Nigeria by providing homeless victim with a home.
            </p>
          </div>
        </div>

        <div className="my-5">
            <StatBar />
        </div>

        <div className="mt-8 grid gap-4 pt-10 sm:grid-cols-2">
          <img
            src="https://images.pexels.com/photos/6647178/pexels-photo-6647178.jpeg?auto=compress&cs=tinysrgb&w=500"
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
        </div>
      </div>
    </div>
  )
}