import { Component } from '../../component';

export class Footer implements Component {
  private footer: HTMLElement;

  constructor(private readonly root: HTMLElement | null) {
    this.footer = document.createElement('div');
    this.footer.classList.add('footer-block');
  }

  render(): HTMLElement {
    this.footer.innerHTML = `
    <div class="container">
        <footer class="footer">
          <div class="footer-container">
            <div class="github">
              <a class="github-link" href="https://github.com/DenisFedorovich"
              target="_blank" rel="noopener noreferrer">github</a>
            </div>

            <a class="rss" href="https://rs.school/js/" target="_blank" rel="noopener">
              <span class="rss-year">'21</span>
            </a>

        </footer>
      </div>
       `;

    return this.footer;
  }
}
