/**
 * Alba Electrical — Shared Footer
 * Single source of truth. Included on every page via:
 *   <div id="alba-footer"></div>
 *   <script src="assets/js/alba-footer.js"></script>
 */
document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('alba-footer');
  if (!el) return;

  el.innerHTML = `
  <footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" role="contentinfo"
    style="background-color:#1a1a1a; padding:60px 0 0;">

    <!-- Main footer content -->
    <div style="max-width:1200px; margin:0 auto; padding:0 20px;">

      <!-- Top row: description + social -->
      <div style="text-align:center; margin-bottom:40px;">
        <p style="color:#ccc; font-size:15px; max-width:600px; margin:0 auto 20px;">
          From EICR inspections and full rewires to solar PV, EV charging, and heat pump installations,
          we provide MCS &amp; NICEIC certified electrical and renewable energy services across Scotland.
        </p>
        <div style="display:flex; justify-content:center; gap:16px;">
          <a href="#" aria-label="Facebook" style="color:#999; text-decoration:none; font-size:20px;">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
          </a>
          <a href="#" aria-label="Instagram" style="color:#999; text-decoration:none; font-size:20px;">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn" style="color:#999; text-decoration:none; font-size:20px;">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
          </a>
        </div>
      </div>

      <!-- 3-column grid -->
      <div style="display:flex; justify-content:center; gap:60px; flex-wrap:wrap; text-align:center; padding-bottom:40px; border-bottom:1px solid #333;">

        <div style="min-width:160px;">
          <h3 style="color:#fff; font-size:14px; text-transform:uppercase; letter-spacing:0.1em; margin-bottom:12px;">Services</h3>
          <ul style="list-style:none; padding:0; margin:0;">
            <li style="color:#999; font-size:14px; margin-bottom:6px;">EICR &amp; Safety Inspections</li>
            <li style="color:#999; font-size:14px; margin-bottom:6px;">Installations &amp; Maintenance</li>
            <li style="color:#999; font-size:14px; margin-bottom:6px;">Solar PV</li>
            <li style="color:#999; font-size:14px; margin-bottom:6px;">EV Charging Points</li>
            <li style="color:#999; font-size:14px; margin-bottom:6px;">Battery Storage</li>
            <li style="color:#999; font-size:14px; margin-bottom:6px;">Heat Pump Installations</li>
          </ul>
        </div>

        <div style="min-width:160px;">
          <h3 style="color:#fff; font-size:14px; text-transform:uppercase; letter-spacing:0.1em; margin-bottom:12px;">Contact</h3>
          <ul style="list-style:none; padding:0; margin:0;">
            <li style="color:#999; font-size:14px; margin-bottom:6px;">Alba Electrical and Renewable Services</li>
            <li style="color:#999; font-size:14px; margin-bottom:6px;">Scotland — Borders to Aberdeen</li>
            <li style="color:#999; font-size:14px; margin-bottom:6px;">info@albaelectrical.co.uk</li>
          </ul>
        </div>

        <div style="min-width:160px;">
          <h3 style="color:#fff; font-size:14px; text-transform:uppercase; letter-spacing:0.1em; margin-bottom:12px;">Certifications</h3>
          <ul style="list-style:none; padding:0; margin:0;">
            <li style="color:#999; font-size:14px; margin-bottom:6px;">MCS Registered Installer</li>
            <li style="color:#999; font-size:14px; margin-bottom:6px;">NICEIC Approved Contractor</li>
          </ul>
        </div>

      </div>

      <!-- Copyright bar -->
      <div style="text-align:center; padding:20px 0; color:#666; font-size:13px;">
        &copy; 2025 Alba Electrical and Renewable Services
      </div>

    </div>
  </footer>
  `;
});
