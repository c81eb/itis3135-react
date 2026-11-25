import usePageTitle from '../usePageTitle.js'

export default function Introduction() {
  usePageTitle('Introduction')
  return (
    <>
      <h2>Introduction</h2>
      <h6>Caleb 'Adrian' Gilmore | Clever Gecko</h6>

      <figure>
        <img src="/images/me.jpg" alt="Photo of Caleb Gilmore" />
        <figcaption>Caleb at UNC Charlotte</figcaption>
      </figure>

      <ul>
        <li><strong>Personal Background:</strong> Student at UNC Charlotte studying Computer Science.</li>
        <li><strong>Professional Background:</strong> Interested in web development and software engineering.</li>
        <li><strong>Academic Background:</strong> Undergraduate student.</li>
        <li><strong>Background in this Subject:</strong> HTML, CSS, and general web design concepts.</li>
        <li><strong>Primary Work Computer:</strong> Macbook.</li>
        <li><strong>Primary Work Location:</strong> Apartment.</li>
        <li><strong>Alternate Computer:</strong> Windows</li>
        <li><strong>Courses I'm Taking &amp; Why:</strong>
          <ol>
            <li>ITIS 3135 – Web App Development
              <ol>
                <li>To gain hands-on experience building web applications.</li>
              </ol>
            </li>
            <li>ITSC 1213 – Programming
              <ol>
                <li>To learn basic programming.</li>
              </ol>
            </li>
          </ol>
        </li>
        <li><strong>Funny/Interesting Item:</strong> I enjoy playing sports and playing video games.</li>
      </ul>

      <blockquote>
        <p>"Simplicity is prerequisite for reliability."</p>
        <cite>– Edsger W. Dijkstra</cite>
      </blockquote>

      <ul>
        <li><a href="https://webpages.charlotte.edu/cgilmo11/">CLT Web</a></li>
        <li><a href="https://c81eb.github.io/">GitHub.io</a></li>
        <li><a href="https://github.com/c81eb">GitHub</a></li>
        <li><a href="https://www.freecodecamp.org/c81eb">freeCodeCamp</a></li>
        <li><a href="https://www.codecademy.com/profiles/array8146532926">Codecademy</a></li>
        <li><a href="https://www.linkedin.com/in/calebgilmore">LinkedIn</a></li>
      </ul>
    </>
  )
}