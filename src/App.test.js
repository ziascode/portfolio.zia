import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.history.replaceState({}, '', '/');
  jest.spyOn(window.HTMLMediaElement.prototype, 'pause').mockImplementation(() => {});
  jest.spyOn(window.HTMLMediaElement.prototype, 'play').mockImplementation(() => Promise.resolve());
});

test('shows the portfolio introduction and featured work', () => {
  render(<App />);

  expect(document.querySelector('.brand-mark')).not.toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /I build and lead web platforms that raise/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /View my work/i })).toHaveAttribute('href', '/work');
  expect(screen.getByRole('heading', { name: 'AutoGive' })).toBeInTheDocument();
  expect(screen.getAllByText('Impact').length).toBeGreaterThan(0);
  expect(screen.getAllByText('My role').length).toBeGreaterThan(0);
  expect(screen.getByRole('list', { name: 'AutoGive technology stack' })).toHaveTextContent('Next.js');
  expect(screen.getAllByText('$1.2M raised in the first month').length).toBeGreaterThan(0);
});

test('allows all soundscapes to play at the same time', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: 'Play Fire' }));
  fireEvent.click(screen.getByRole('button', { name: 'Play Night ambience' }));
  fireEvent.click(screen.getByRole('button', { name: 'Play Creek' }));

  expect(screen.getByRole('button', { name: 'Pause Fire' })).toHaveAttribute('aria-pressed', 'true');
  expect(screen.getByRole('button', { name: 'Pause Night ambience' })).toHaveAttribute('aria-pressed', 'true');
  expect(screen.getByRole('button', { name: 'Pause Creek' })).toHaveAttribute('aria-pressed', 'true');
});

test('opens the full work index from the home page', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('link', { name: /Explore all selected work/i }));

  expect(screen.getByRole('heading', { name: /Digital work with a real-world return/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Aero Cleaning Services' })).toBeInTheDocument();
});

test('serves a case study at its portfolio route', () => {
  window.history.pushState({}, '', '/work/autogive');
  const { container } = render(<App />);

  expect(screen.getByRole('heading', { name: /AutoGive: replacing a third-party tool/i })).toBeInTheDocument();
  expect(screen.getByText('$1.2M in the first month')).toBeInTheDocument();
  expect(screen.getByText('The experience, at a glance')).toBeInTheDocument();
  expect(container.querySelector('.case-hero-art.artwork-autogive')).toBeInTheDocument();
  expect(container.querySelector('.case-screen.case-screen-phone')).toBeInTheDocument();
  expect(container.querySelector('.case-phone img')).toHaveAttribute('src', '/autogive-phone-reference.png');
  expect(screen.getByText('Supplied project screenshot')).toBeInTheDocument();
  expect(container.querySelectorAll('.flow-step')).toHaveLength(3);
});

test('shows the supplied Penny Appeal homepage in its case study screen', () => {
  window.history.pushState({}, '', '/work/penny-appeal');
  render(<App />);

  expect(screen.getByRole('heading', { name: /Penny Appeal Canada: the website/i })).toBeInTheDocument();
  expect(document.querySelector('.screen-penny-reference img')).toHaveAttribute(
    'src',
    '/penny-appeal-homepage-reference.png',
  );
});

test('shows the supplied FormaSharp homepage in its case study screen', () => {
  window.history.pushState({}, '', '/work/formasharp');
  render(<App />);

  expect(screen.getByRole('heading', { name: /FormaSharp: a headless WordPress rebuild/i })).toBeInTheDocument();
  expect(document.querySelector('.screen-formasharp-reference img')).toHaveAttribute(
    'src',
    '/formasharp-homepage-reference.png',
  );
});
