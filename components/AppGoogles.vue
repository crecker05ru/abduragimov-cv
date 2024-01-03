<template>
        <div ref="photoGooglesEl" class="app-googles__photo-googles" draggable="true" @dragstart="handleDragStart" @dragend="handleDragEnd">
          <svg class="app-googles__googles-svg"  fill="#00003fdf" version="1.1" id="Layer_1" xmlns:x="&ns_extend;" xmlns:i="&ns_ai;" xmlns:graph="&ns_graphs;"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 250 750 265"
	 style="enable-background:new 0 0 750 750;" xml:space="preserve">
<switch>
	<foreignObject requiredExtensions="&ns_ai;" x="0" y="0" width="1" height="1">
	</foreignObject>
	<g i:extraneous="self">
		<path d="M727.6,348.1c-2.8-29.9-14.9-57.6-38.1-77.2c-24.7-20.9-62.4-30.6-94.1-32.4c-35.6-2-71.8,1-107.6,0.3
			c-21.7-0.4-43.5,1.4-65.3,1.9c-27.7,0.6-55.3,0.3-83-0.1c-45.1-0.6-90-0.9-135.1-1c-11,0-22.1-0.1-33.1-0.1
			c-28.2-0.1-55.4,2.3-81.6,13.8c-33.9,14.9-56,39.9-64.2,76.4c-4.8,21.1-5.2,42.4-2.2,63.7c3.5,25.1,10.4,49.3,23.9,71
			c16.8,27.1,43.8,44.4,75.7,47.3c21.9,2,42.8-2.3,63.1-10c30.5-11.6,56.8-29.8,80.7-51.7c9.5-8.7,19.1-17.4,26.7-27.9
			c11.3-15.6,21.3-32.1,29.9-49.5c10.6-21.6,19.5-43.8,18-68.6c-0.1-1.8,0.9-2.4,2.2-3c20.7-10.2,41.5-10.8,62.4-0.6
			c2.5,1.2,3.2,2.7,3,5.4c-0.6,7.8,0.3,15.6,2,23.2c3.4,16.3,9.7,31.6,17.5,46.3c16,30,33.9,56.2,59.4,78.9
			c23.9,21.4,51.6,39,82.1,49.4c22.3,7.7,45.2,11.2,68.6,6.5c32.8-6.5,55.5-26.2,70-55.5C724.9,421,731.1,385.4,727.6,348.1z
			 M473.7,247.1c-0.6,1-3.6,2.4-5.4,2.8c-21.5,5.3-41.5,11.2-53,31.9c-2.2,4-5,12.8-10.2,6.1c-5.2-6.6-16.3-5.5-23.9-5.6
			c-8-0.1-16-0.1-23.9,0.4c-4.1,0.3-7.3,1.4-10.2,4.3c-5,5-7.7,4.4-10.7-1.8c-7.4-15.5-23.3-29.9-40.6-33.2c-4.3-0.8-8.9,0.1-13-1.8
			c-1-0.5-1.8-1.5-1.7-2.5c0.2-2.3,3.6-1.5,5-1.4c3.4,0.2,6.9,0.1,10.3,0.2c19.6,0.2,39.3,0.2,58.9,0.2c24.1,0,48.2,0,72.3,0
			c14.4,0,28.8-0.2,43.2-0.5C473.5,246,474.1,246.5,473.7,247.1z"/>
	</g>
</switch>
  </svg>
        </div>
</template>
<script setup>
const photoGooglesEl = ref()
const shiftX = ref(0)
const shiftY = ref(0)
const handleDragStart = (e) => {
console.log('handleDragStart',e)
console.log('e.clientY',e.clientY)
console.log('e.offsetY',e.offsetY)
console.log('e.screenY',e.screenY)
console.log('photoGooglesEl.value',photoGooglesEl.value.getBoundingClientRect())
shiftX.value = e.clientX - photoGooglesEl.value.getBoundingClientRect().left
shiftY.value = e.clientY - photoGooglesEl.value.getBoundingClientRect().top
}
const handleDragEnd = (e) => {
  console.log('handleDragStart',e)
  console.log('e.clientY',e.clientY)
console.log('e.offsetY',e.offsetY)
console.log('e.screenY',e.screenY)
console.log('photoGooglesEl.value',photoGooglesEl.value.getBoundingClientRect())
photoGooglesEl.value.style.top = `${e.pageY - shiftY.value}px`
photoGooglesEl.value.style.left = `${e.pageX - shiftX.value}px`
}
</script>
<style lang="scss">
.app-googles {
  &__photo-googles {
  position: absolute;
  top: 255px;
  left: 85px;
  cursor: pointer;
  z-index: 11;
}
&__googles-svg {
  // position: absolute;
  // top: 110px;
  // left: 55px;
  width: 90px;
  // height: 1rem;
}
}

</style>