
(function () {

  /**
  * @global
  * @description Represents a main menu
  */
   var mainMenu = {
     /** Get DOM elements. */
     hamburger: $('.nav-inner'),
     menuLinks: $('.nav-close a'),
     drawer: $('.nav-close'),

     /**
     * @function
     * @description Shows menu when click on it
     */
     showMenu: function () {
       this.hamburger.on('click', function (e) {
         mainMenu.drawer.toggleClass('nav-open');
         e.stopPropagation();
       });
     },

     /**
     * @function
     * @description Hide menu after click on link
     */
     hideMenu: function () {
       this.menuLinks.on('click', function (e) {
         mainMenu.drawer.toggleClass('nav-open');
       });
     },

     /**
     * @function
     * @description Scroll page to specific element when click on link
     */
     scrollMenu: function () {
       this.drawer.on('click', 'a', function(e){
         var position = $(this).data('position');
         $('html, body').animate({
           scrollTop: $(position).offset().top
         }, 'slow');
     	});
     },

     /**
     * @function
     * @description Initialize menu methods
     */
     init: function () {
       this.showMenu();
       this.hideMenu();
       this.scrollMenu();
     }
   };

   mainMenu.init();

   /**
   * @global
   * @description Represents a works
   */
   var works = {
     /** Get DOM elements. */
     workList: $('.work-list'),
     workListInner: $('.work-list-inner'),

     /**
     * @function
     * @description Show skills after click name of client
     */
     workClick: function () {
       this.workList.on('click', '.work-list-inner', function(e){
         works.workListInner.removeClass('work-list-click');
         $( this ).toggleClass('work-list-click');
         $('.work-tools-inner').hide();
         var getWork = $( this ).data('work');
         $(getWork).show();
         $(getWork).addClass('text-focus-in');
     	});
     },
     /**
     * @function
     * @description Initialize works methods
     */
     init: function () {
       this.workClick();
     }
   };

   works.init();

   /**
   * @global
   * @description Represents a Message Me button behavior
   */
   var messageMe = {
     /** Get DOM elements. */
     messageMeBtn: $('.message-me'),
     messageMeTxt: $('.message-me-txt'),

     /**
     * @function
     * @description Show email after click Message Me button
     */
     btnClick: function () {
       this.messageMeBtn.on('click', function(e){
         messageMe.messageMeTxt.show();
         messageMe.messageMeTxt.addClass('text-focus-in');
       });
     },

     /**
     * @function
     * @description Initialize messageMe methods
     */
     init: function () {
       this.btnClick();
     }
   };

   messageMe.init();

} () );
