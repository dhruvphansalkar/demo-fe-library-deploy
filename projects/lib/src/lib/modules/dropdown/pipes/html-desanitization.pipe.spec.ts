import { HtmlDesanitizationPipe } from './html-desanitization.pipe';

describe('HtmlDesanitizationPipe', () => {
  it('create an instance', () => {
    const pipe = new HtmlDesanitizationPipe();
    expect(pipe).toBeTruthy();
  });
});
