export function Statitics({title, stats}) {
    return  <section class="statistics">
    <h2 class="title">Upload stats</h2>
  
    <ul class="stat-list">
      <li class="item">
        <span class="label">.docx</span>
        <span class="percentage">{stats}%</span>
      </li>
      <li class="item">
        <span class="label">.mp3</span>
        <span class="percentage">{stats}%</span>
      </li>
      <li class="item">
        <span class="label">.pdf</span>
        <span class="percentage">{stats}%</span>
      </li>
      <li class="item">
        <span class="label">.mp4</span>
        <span class="percentage">{stats}%</span>
      </li>
    </ul>
  </section>
};