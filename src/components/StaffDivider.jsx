import { useStaffProgress } from '../hooks/useStaffProgress';

/** The hand-drawn stave that draws itself in between the hero and the first section. */
export function StaffDivider() {
  const { wrapperRef, pathRef } = useStaffProgress();

  return (
    <svg
      ref={wrapperRef}
      className="staff-divider"
      viewBox="0 0 1080 90"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        ref={pathRef}
        className="staff-path"
        d="M0,45 C 180,10 360,80 540,45 C 720,10 900,80 1080,45"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="2"
      />
    </svg>
  );
}
