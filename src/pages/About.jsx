import usePageTitle from '../usePageTitle.js'

export default function About() {
  usePageTitle('About This Course')
  return (
    <>
      <h2>About This Course</h2>
      <img src="/images/mascot.png" alt="Clever Gecko Mascot" width="200" />
      <p>This page is built in part to demonstrate work for the Charlotte class ITIS3135 - Front-End Web Application Development for those sections run by Mr. von Briesen. You may find additional information about this course at <a href="https://divonbriesen.github.io/teaching/itis3135/" target="_blank">https://divonbriesen.github.io/teaching/itis3135/</a>.</p>

      <p>This course seeks to provide students relevant experience in front-end web application development by building multiple websites using a variety of tools and techniques.</p>

      <h3>Course Tools</h3>
      <p>The tools the course uses specifically include:</p>
      <ul>
        <li>VS Code</li>
        <li>Emmet within VS Code</li>
        <li>SFTP via Filezilla</li>
        <li>Git via GitHub Desktop and GitHub.com</li>
        <li>Various Browser tools</li>
        <li>The Accumulus Validator</li>
      </ul>

      <h3>Course Projects</h3>
      <p>The sites students will build, and which this page links to, include:</p>
      <ul>
        <li>A personal home portfolio</li>
        <li>This course site</li>
        <li>A design firm site - representing a fictitious/aspirational design/consulting firm for the student and named after them</li>
        <li>A Crappy page - intended to do all the bad things, so as to avoid them anywhere else</li>
        <li>A whimsical product company</li>
        <li>A student/colleague/peer management tool</li>
        <li>A client project website</li>
      </ul>
    </>
  )
}