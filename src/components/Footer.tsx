import { Bar, Inner } from './Footer.styles';

export function Footer() {
  return (
    <Bar>
      <Inner>
        <span>STARSOFT © {new Date().getFullYear()} TODOS OS DIREITOS RESERVADOS.</span>
      </Inner>
    </Bar>
  );
}
