jQuery(document).ready(function() {
			//var JANCOKKAULIATLIAT = document.getElementById('announcement');
			var JANCOKKAULIATLIAT = document.querySelector('.card-body');
			if (!JANCOKKAULIATLIAT) {
				return;
			}
			var gifHtmlContent = `
			<div style="padding-left: 10px; padding-right: 10px; padding-bottom: 10px;" id="navigasi" class="container">
				<div style="background-color: rgba(0, 0, 0, 0);" >
					<div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 10px; text-align: center;">
						<div style="display: flex; flex-direction: column; gap: 10px;">
							<a href="/game?category=101"><img src="https://bannerhd108.pages.dev/iconslot.webp" style="width: 80%; height: auto; border-radius: 4px;"></a>
						</div>
						<div style="display: flex; flex-direction: column; gap: 10px;">							
							<a href="/game?category=102"><img src="https://bannerhd108.pages.dev/iconcasino.webp" style="width: 80%; height: auto; border-radius: 4px;"></a>
						</div>
						<div style="display: flex; flex-direction: column; gap: 10px;">
							<a href="/togel"><img src="https://bannerhd108.pages.dev/icontogel.webp" style="width: 80%; height: auto; border-radius: 4px;"></a>
						</div>
					</div>
				</div>
			</div>`;			
      	jQuery(gifHtmlContent).insertBefore(JANCOKKAULIATLIAT);
		});
