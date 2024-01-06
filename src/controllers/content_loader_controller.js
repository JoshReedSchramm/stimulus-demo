import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["content"];

  load({ params }) {
    fetch(params.url)
      .then(response => response.text())
      .then(html => this.contentTarget.innerHTML = html)
  }
}