import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class HandleBack extends Vue {
  fromRoute: any = undefined;

  beforeRouteEnter(to: any, from: any, next: Function) {
    next((vm: any) => {
      vm.fromRoute = from;
    });
  }

  /**
   * Handle Back
   * @desc Extends default router back functionality
   * @param {string} fallback - The fallback path if there is no history to use with $router.back(). This is usually the case if the page was visited directly or from another site
   **/
  handleBack(fallback: string) {
    if (!this.fromRoute.name) {
      this.$router.push(fallback);
    } else {
      this.$router.back();
    }
  }
}
