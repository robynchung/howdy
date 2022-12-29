import Paragraph from "components/common/Paragraph";
import { SubContainer } from "components/Layout/Container";

function About() {
  return (
    <SubContainer>
      <Paragraph>
        As a highly motivated and
        <span className="highlight"> hard-working frontend engineer </span>
        with <span className="highlight">3+ years of experience,</span> I have a
        strong track record of creating intuitive and visually appealing
        <span className="highlight"> user interfaces.</span> confidence.
      </Paragraph>

      <Paragraph>
        In addition to my frontend skills, I am also a capable{" "}
        <span className="highlight">backend engineer,</span> able to develop
        robust and scalable server-side systems.
        <span className="highlight">
          I am a very genuine and cooperative team player
        </span>
        , always willing to lend a hand and collaborate with others to achieve
        our shared goals. At the same time, I am also a
        <span className="highlight"> self-starter</span> who is able to{" "}
        <span className="highlight"> work independently</span> and take on new
        challenges with confidence.
      </Paragraph>

      <Paragraph>
        I believe that my combination of{" "}
        <span className="highlight">
          technical expertise, positive attitude, and <br />
          willingness to learn{" "}
        </span>
        make me an excellent fit for any project.
      </Paragraph>
    </SubContainer>
  );
}

export default About;
