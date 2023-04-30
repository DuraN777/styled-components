import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";

const Footer = () => {
  return (
    <div>
      <Container>
        <img src="./images/logo_white.svg" alt="Huddle Logo" />
        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul className="footer__ul">
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul className="footer__ul">
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          {/* <SocialIcons /> */}
        </Flex>
      </Container>
    </div>
  );
}
 
export default Footer;