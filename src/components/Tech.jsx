import { SectionWrapper } from '../hoc';
import { skillCategories } from '../constants';

const Tech = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-wrap gap-3'>
        <span className='rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-200'>Frontend Engineer</span>
      </div>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
        {skillCategories.map(({ title, skills }) => (
          <div
            key={title}
            className='rounded-2xl border border-white/10 bg-slate-900/60 p-4 shadow-[0_0_30px_rgba(94,234,212,0.04)] backdrop-blur-sm'
          >
            <div className='mb-4 flex items-center justify-between'>
              <h3 className='text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-200'>
                {title}
              </h3>
              <span className='h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]' />
            </div>

            <div className='flex flex-wrap gap-2'>
              {skills.map((skill) => (
                <span
                  key={skill}
                  className='rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-100'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "")