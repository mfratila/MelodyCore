import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { SectionHead } from '../components/SectionHead';
import { CourseIcon } from '../components/icons';
import { courses } from '../data/courses';

export function Courses() {
  return (
    <Reveal as="section" className="section cream" id="cursuri">
      <div className="wrap">
        <SectionHead eyebrow="Ce poți învăța" title="Cursuri" />
        <Reveal className="cards" group>
          {courses.map((course) => (
            <article key={course.id} className="card">
              <div className="tape" />
              <CourseIcon name={course.icon} />
              <h3>{course.title}</h3>
              <p>{course.text}</p>
              <p className="age">{course.age}</p>
            </article>
          ))}
        </Reveal>
        <div className="cards-more">
          <Link className="btn btn-outline" to="/preturi">
            Vezi prețurile și abonamentele →
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
