<template>
  <div class="home-container">
    <b-container class="bv-example-row">
      <b-row>
        <b-col class="col-lg-3 col-md-4 col-sm-6 col-12">
          <b-card title="Movies" text-variant="white">
            <router-link to="/favourite-list">
              <b-card-img src="https://placekitten.com/g/600/600" top></b-card-img>
            </router-link>
            <div class="manage-groups">
              <b-button size="sm" variant="outline-primary">32 Favourites</b-button>
              <b-button size="sm" href="#" variant="primary">
                <i class="fa fa-edit"></i>
              </b-button>
              <b-button size="sm" href="#" variant="primary">
                <i class="fa fa-trash"></i>
              </b-button>
            </div>
          </b-card>
        </b-col>
        <b-col class="col-lg-3 col-md-4 col-sm-6 col-12">
          <b-card title="Friends" text-variant="white">
            <router-link to="/favourite-list">
              <b-card-img src="https://picsum.photos/400/400/?image=20" top></b-card-img>
            </router-link>
            <div class="manage-groups">
              <b-button size="sm" variant="outline-primary">26 Favourites</b-button>
              <b-button size="sm" href="#" variant="primary">
                <i class="fa fa-edit"></i>
              </b-button>
              <b-button size="sm" href="#" variant="primary">
                <i class="fa fa-trash"></i>
              </b-button>
            </div>
          </b-card>
        </b-col>
        <b-col class="col-lg-3 col-md-4 col-sm-6 col-12">
          <b-card title="Books" text-variant="white">
            <router-link to="/favourite-list">
              <b-card-img src="https://picsum.photos/600/600/?image=35" top></b-card-img>
            </router-link>
            <div class="manage-groups">
              <b-button size="sm" variant="outline-primary">35 Favourites</b-button>
              <b-button size="sm" href="#" variant="primary">
                <i class="fa fa-edit"></i>
              </b-button>
              <b-button size="sm" href="#" variant="primary">
                <i class="fa fa-trash"></i>
              </b-button>
            </div>
          </b-card>
        </b-col>
        <b-col class="col-lg-3 col-md-4 col-sm-6 col-12">
          <b-card title="Dishes" text-variant="white">
            <router-link to="/favourite-list">
              <b-card-img src="https://picsum.photos/600/600/?image=33" top></b-card-img>
            </router-link>
            <div class="manage-groups">
              <b-button size="sm" variant="outline-primary">41 Favourites</b-button>
              <b-button size="sm" href="#" variant="primary">
                <i class="fa fa-edit"></i>
              </b-button>
              <b-button size="sm" href="#" variant="primary">
                <i class="fa fa-trash"></i>
              </b-button>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
