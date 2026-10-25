import {
  ArrowRight,
  HeartHandshake,
  GraduationCap,
  Building2,
  Briefcase,
  Home as HomeIcon,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import ProgramCard from '../components/ProgramCard.jsx'
import { usePrograms } from '../context/ProgramsContext.jsx'
import { useInView } from '../hooks/useInView.js'

const PROGRAMMES = [
  {
    icon: HeartHandshake,
    title: 'Homeless Outreach & Essential Support',
    tagline: 'Meeting immediate needs. Preserving human dignity.',
    paragraphs: [
      'People experiencing homelessness often face barriers to accessing basic necessities, healthcare, and personal hygiene. Our outreach program seeks to respond to these immediate needs while building meaningful relationships with the people we serve.',
      'Through community-based outreach, we aim to provide essential supplies, facilitate access to basic healthcare services, and connect individuals with relevant support.',
    ],
    focusLabel: 'Our areas of focus include:',
    focusAreas: [
      { label: 'Food Outreach', text: 'Providing meals and essential food supplies to people experiencing homelessness.' },
      { label: 'Hygiene Outreach', text: 'Distributing personal hygiene products and supporting access to basic hygiene facilities.' },
      { label: 'Health Outreach', text: 'Facilitating basic health screenings and connecting individuals with appropriate healthcare providers.' },
      { label: 'Clothing Outreach', text: 'Providing clean, appropriate clothing and other essential items.' },
    ],
    objective: 'To alleviate immediate hardship, protect dignity, and create opportunities for continued engagement and support.',
    buttonLabel: 'Explore Our Outreach',
    buttonTo: '/projects',
  },
  {
    icon: GraduationCap,
    title: 'School Sensitisation & Youth Engagement',
    tagline: 'Building understanding. Challenging stigma. Shaping perspectives.',
    paragraphs: [
      'Young people have an important role to play in shaping how society understands and responds to homelessness.',
      'Our school sensitisation program seeks to educate students about the realities of homelessness, challenge harmful stereotypes, and encourage empathy, inclusion, and responsible community participation.',
      'Through interactive sessions, guided discussions, educational resources, and age-appropriate activities, we aim to help students understand the circumstances that can contribute to homelessness and recognise the dignity of every individual.',
      'Our engagement may also encourage students to participate in constructive initiatives that promote compassion, social responsibility, and community support.',
    ],
    objective: 'To nurture a generation that approaches homelessness with greater understanding, compassion, and a willingness to contribute to meaningful solutions.',
    buttonLabel: 'Discover Our School Program',
    buttonTo: '/projects',
  },
  {
    icon: Building2,
    title: 'Institutional Sensitisation & Strategic Partnerships',
    tagline: 'Strengthening understanding. Encouraging collective responsibility.',
    paragraphs: [
      'Addressing homelessness requires the involvement of institutions that influence public attitudes, provide essential services, and shape responses to vulnerable populations.',
      'Through institutional sensitisation and strategic engagement, Springswone Foundation seeks to strengthen understanding of homelessness among faith communities, public institutions, professional groups, and relevant government agencies.',
      'We aim to encourage informed, compassionate, and coordinated responses that recognise the dignity and circumstances of people experiencing homelessness.',
    ],
    focusLabel: 'Our areas of engagement include:',
    focusAreas: [
      { label: 'Faith Communities', text: 'Engaging churches, mosques, and other faith-based organisations in conversations about compassion, inclusion, and community responsibility.' },
      { label: 'Law Enforcement', text: 'Promoting awareness and respectful engagement with people experiencing homelessness, including opportunities for dialogue with relevant police authorities.' },
      { label: 'Healthcare Professionals', text: 'Encouraging greater understanding of the healthcare challenges faced by people experiencing homelessness and exploring opportunities for collaboration.' },
      { label: 'Government & Public Institutions', text: 'Promoting constructive dialogue and partnerships around homelessness prevention, support, and reintegration.' },
      { label: 'Community Organisations', text: 'Building relationships with organisations that can contribute expertise, resources, and practical assistance.' },
    ],
    objective: 'To strengthen institutional understanding, encourage collaboration, and contribute to more coordinated responses to homelessness.',
    buttonLabel: 'Partner With Us',
    buttonTo: '/contact',
  },
  {
    icon: Briefcase,
    title: 'Skills Development & Empowerment',
    tagline: 'Building capabilities. Expanding possibilities.',
    paragraphs: [
      "A person's experience of homelessness should not define their future.",
      'Our Skills Development and Empowerment Program seeks to expand access to practical skills, vocational training, and opportunities that can help individuals experiencing homelessness work towards greater independence and economic stability.',
      'Through partnerships with training providers, employers, vocational institutions, and other relevant organisations, we aim to develop pathways through which participants can acquire useful skills and explore opportunities for employment, entrepreneurship, and self-reliance.',
      'Depending on available resources and partnerships, areas of support may include vocational training, digital skills, entrepreneurship education, career guidance, and employment connections.',
    ],
    objective: 'To create pathways towards greater independence by connecting people experiencing homelessness with the skills, resources, and opportunities they need to rebuild their lives.',
    buttonLabel: 'Empower Through Skills',
    buttonTo: '/contact',
  },
  {
    icon: HomeIcon,
    title: 'Shelter, Housing Support & Reintegration',
    tagline: 'Beyond survival. Towards stability and belonging.',
    paragraphs: [
      'Safe and stable accommodation can be an important foundation for rebuilding one\u2019s life. However, moving beyond homelessness may also require access to essential services, social support, livelihood opportunities, and sustained assistance.',
      'Through this program, Springswone Foundation seeks to develop pathways towards safe accommodation and sustainable reintegration for people experiencing homelessness.',
      'Our long-term approach may include partnerships with shelters and housing providers, referrals to relevant social services, transitional accommodation initiatives, livelihood support, and assistance with reconnecting to community networks.',
      'We recognise that individual circumstances differ. Therefore, meaningful reintegration requires an approach that considers each person\u2019s needs, dignity, and circumstances.',
    ],
    objective: 'To advance pathways towards stable housing, greater independence, and meaningful participation in society.',
    buttonLabel: 'Our Vision for Reintegration',
    buttonTo: '/contact',
  },
]

function ProgrammeSection({ programme, index }) {
  const [ref, inView] = useInView()
  const Icon = programme.icon
  const alt = index % 2 === 1

  return (
    <section
      ref={ref}
      className="px-6 py-16 sm:py-20"
      style={{ background: alt ? 'var(--accent-bg)' : 'var(--bg)' }}
    >
      <div
        className={`mx-auto max-w-[1126px] transition-all duration-700 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <div className="flex items-center gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]">
            <Icon size={18} className="text-white" />
          </span>
        </div>

        <h3 className="font-styling mt-4 text-[22px] leading-[1.3] text-[var(--text-h)] sm:text-[26px]">
          {programme.title}
        </h3>
        <p className="mt-1.5 text-[14px] font-medium italic text-[var(--accent)] sm:text-[15px]">
          {programme.tagline}
        </p>

        <div className="mt-5 space-y-4">
          {programme.paragraphs.map((p, i) => (
            <p key={i} className="text-[14px] leading-relaxed text-[var(--text)] sm:text-[15px]">
              {p}
            </p>
          ))}
        </div>

        {programme.focusAreas && (
          <div className="mt-6">
            <p className="text-[14px] font-semibold text-[var(--text-h)]">{programme.focusLabel}</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {programme.focusAreas.map((area) => (
                <div
                  key={area.label}
                  className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4"
                >
                  <p className="text-[13px] font-semibold text-[var(--text-h)]">{area.label}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-[var(--text)]">{area.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 rounded-xl border-l-4 border-[var(--accent)] bg-[var(--bg)] px-5 py-4">
          <p className="text-[12px] font-bold tracking-[0.12em] text-[var(--accent)]">
            OUR OBJECTIVE
          </p>
          <p className="mt-1.5 text-[14px] leading-relaxed text-[var(--text)]">
            {programme.objective}
          </p>
        </div>

        <Link
          to={programme.buttonTo}
          className="group mt-6 inline-flex items-center gap-1.5 rounded-full bg-[var(--accent)] px-6 py-2.5 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
        >
          {programme.buttonLabel}
          <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}

export default function Programs() {
  const { programs, loading, error } = usePrograms()

  return (
    <div className="text-left">
      <PageHero
        title="Our Programs"
        crumb="Empowering lives through practical skills, meaningful support, and opportunities for a brighter and more independent future."
      />

      {/* Intro */}
      <div className="mx-auto max-w-[1126px] px-6 py-16 text-center sm:py-20">
        <h2 className="font-styling mt-2 text-left sm:text-center text-[26px] leading-[1.4] text-[var(--text-h)] sm:text-[32px]">
          Practical Action. Human Dignity. Lasting Change.
        </h2>
        <div className="mt-5 space-y-4 text-left sm:text-center">
          <p className="text-[14px] leading-relaxed text-[var(--text)] sm:text-[15px]">
            Homelessness is a complex human and social challenge that requires more than a
            single intervention. At Springswone Foundation for the Homeless, our programs
            are designed to address immediate needs, challenge misconceptions, expand
            opportunities, and advance pathways towards stability and reintegration.
          </p>
          <p className="text-[14px] leading-relaxed text-[var(--text)] sm:text-[15px]">
            Through direct outreach, education, institutional engagement, skills
            development, and housing-related support, we work towards a future where every
            individual has the opportunity to live with dignity and belong.
          </p>
        </div>
      </div>

      {/* Five programs */}
      {PROGRAMMES.map((programme, i) => (
        <ProgrammeSection programme={programme} index={i} />
      ))}

      {/* Real, database-backed programs — appears once any exist */}
      <div className="mx-auto max-w-[1126px] px-6 pt-16 pb-16">
        {error && <p className="text-[13px] text-[var(--danger)]">{error}</p>}
        {!error && loading && <p className="text-[15px] text-[var(--text)]">Loading programs…</p>}

        {!loading && !error && programs.length === 0 && (
          <div className="rounded-xl border border-dashed border-[var(--border)] bg-[var(--code-bg)] px-6 py-8 text-center">
            <p className="text-[15px] text-[var(--text)]">
              Specific programs activities are still being developed. Check back as they launch.
            </p>
          </div>
        )}

        {!loading && programs.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, i) => (
              <ProgramCard key={program.slug} program={program} index={i} />
            ))}
          </div>
        )}
      </div>

      {/* Closing CTA */}
      <section className="bg-[var(--accent)] px-6 py-16 text-center sm:py-20">
        <div className="mx-auto max-w-[1126px]">
          <p className="font-styling text-[24px] leading-[1.4] text-white sm:text-[30px]">
            Lasting Change Takes Collective Effort.
          </p>
          <p className="mt-4 text-[14px] leading-relaxed text-white/80 sm:text-[15px]">
            Every program represents an opportunity to make a difference, whether by
            meeting an immediate need, changing a perspective, building a skill, or helping
            someone move towards a more stable future.
          </p>
          <p className="mt-3 text-[14px] leading-relaxed text-white/80 sm:text-[15px]">
            Together, we can advance a more compassionate and coordinated response to
            homelessness in Nigeria.
          </p>
          <Link
            to="/contact"
            className="group mt-7 inline-flex items-center gap-1.5 rounded-full bg-white px-6 py-2.5 text-[14px] font-semibold text-[var(--accent)] transition-opacity hover:opacity-90"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </div>
  )
}