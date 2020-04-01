<template>
  <div class="project-card">
    <div class="project-header">
      <p class="project-date">2019</p>
    </div>
    <div class="project-image no-image image is-square">
      PRINTING
    </div>
    <div class="project-content">
      <h3>PROJECT TITLE</h3>
      <p class="project-description">description</p>
    </div>
    <div class="project-footer">
      TAG
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project-card {
  background: white;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  padding: 5px;
}

.project-date {
  font-weight: bold;
  font-size: 1.25rem;
  color: gray;
}

.project-image {
  width: 75%;
  margin: auto;
  background: gray;
  color: white;
  text-align: center;
}
</style>
