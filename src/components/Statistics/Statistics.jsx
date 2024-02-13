
export const Statistics = ({ data, title = 'Upload stats' }) => {
    return (  
<section class="statistics">
  <h2 class="title">{title}</h2>
            
<ul class="stat-list">
		{data.map((item, idx) => (
	<li class="item" key={item.id}>
         <span class="label">{item.label}</span> 
         <span class="percentage">{item.percentage}</span>
	</li>
	))}
</ul>  
  </section>
  )
}