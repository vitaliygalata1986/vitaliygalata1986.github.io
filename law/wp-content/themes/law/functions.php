<?php
/**
 * Law functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Law
 */

require_once get_template_directory() . '/Law_Header_Menu.php';

if ( ! function_exists( 'law_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function law_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Law, use a find and replace
		 * to change 'law' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'law', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'header-menu' => esc_html__( 'Header menu', 'law' ),
			'footer-menu' => esc_html__( 'Footer menu', 'law' ),
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'law_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );
	}
endif;
add_action( 'after_setup_theme', 'law_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function law_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'law_content_width', 640 );
}
add_action( 'after_setup_theme', 'law_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function law_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Footer', 'law' ),
		'id'            => 'footer',
		'description'   => esc_html__( 'Add widgets here.', 'law' ),
		'before_widget' => '<div id="%1$s" class="widget %2$s col-md-3">',
		'after_widget'  => '</div>',
		'before_title'  => '<h4 class="widget-title">',
		'after_title'   => '</h4>',
	) );
}
add_action( 'widgets_init', 'law_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function law_scripts() {
	wp_enqueue_style( 'law-style', get_stylesheet_uri() ); // файл сброса стилей, генерируемый сервисом
	wp_enqueue_style( 'law-googlefonts', 'https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,700,800');
	wp_enqueue_style( 'law-animate', get_template_directory_uri() . '/assets/css/animate.css');
	wp_enqueue_style( 'law-icomoon', get_template_directory_uri() . '/assets/css/icomoon.css');
	wp_enqueue_style( 'law-bootstrap', get_template_directory_uri() . '/assets/css/bootstrap.css');
	wp_enqueue_style( 'law-magnific-popup', get_template_directory_uri() . '/assets/css/magnific-popup.css');
	wp_enqueue_style( 'law-owl.carousel.min', get_template_directory_uri() . '/assets/css/owl.carousel.min.css');
	wp_enqueue_style( 'law-owl.theme.default.min.css', get_template_directory_uri() . '/assets/css/owl.theme.default.min.css');
	wp_enqueue_style( 'law-flexslider', get_template_directory_uri() . '/assets/css/flexslider.css');
	wp_enqueue_style( 'law-theme', get_template_directory_uri() . '/assets/css/style.css');
	wp_enqueue_style( 'law-custom', get_template_directory_uri() . '/assets/css/law.css');

	wp_enqueue_script( 'law-modernizr-js', get_template_directory_uri() . '/assets/js/modernizr-2.6.2.min.js' );
    wp_enqueue_script( 'law-respond-js', get_template_directory_uri() . '/assets/js/respond.min.js' );
    wp_script_add_data('law-respond-js', 'conditional', 'lt IE 9'); // подключим скрипт только для IE меньше 9 версии
    wp_deregister_script( 'jquery' );
    wp_register_script( 'jquery', get_template_directory_uri() . '/assets/js/jquery.min.js');
    wp_enqueue_script( 'jquery' );
    wp_enqueue_script( 'law-jquery-easing-js', get_template_directory_uri() . '/assets/js/jquery.easing.1.3.js', array('jquery'), '', true );
    wp_enqueue_script( 'law-bootstrap-js', get_template_directory_uri() . '/assets/js/bootstrap.min.js', array('jquery'), '', true );
    wp_enqueue_script( 'law-jquery-waypoints-js', get_template_directory_uri() . '/assets/js/jquery.waypoints.min.js', array('jquery'), '', true );
    wp_enqueue_script( 'law-jquery-stellar-js', get_template_directory_uri() . '/assets/js/jquery.stellar.min.js', array('jquery'), '', true );
    wp_enqueue_script( 'law-owl-carousel-js', get_template_directory_uri() . '/assets/js/owl.carousel.min.js', array('jquery'), '', true );
    wp_enqueue_script( 'law-jquery-flexslider-js', get_template_directory_uri() . '/assets/js/jquery.flexslider-min.js', array('jquery'), '', true );
    wp_enqueue_script( 'law-jquery-countTo-js', get_template_directory_uri() . '/assets/js/jquery.countTo.js', array('jquery'), '', true );
    wp_enqueue_script( 'law-jquery-magnific-popup-js', get_template_directory_uri() . '/assets/js/jquery.magnific-popup.min.js', array('jquery'), '', true );
    wp_enqueue_script( 'law-magnific-popup-options-js', get_template_directory_uri() . '/assets/js/magnific-popup-options.js', array('jquery'), '', true );
    wp_enqueue_script( 'law-main-js', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '', true );
    wp_localize_script('law-main-js', 'lawData', array( // привязываемся к скрипту law-main-js, имя объекта lawData
            'themePath' => get_template_directory_uri() // свойство themePath - путь к теме,  а сам путь к теме вернет функция get_template_directory_uri()
    ));
}
add_action( 'wp_enqueue_scripts', 'law_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

require_once get_template_directory() . '/inc/tgm/tgm.php'; // подключаем файл tgm.php


function law_comment_nav() {
    // Are there comments to navigate through?
    if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) :
        ?>
        <nav class="navigation comment-navigation" role="navigation">
            <h2 class="screen-reader-text"><?php _e( 'Comment navigation', 'law' ); ?></h2>
            <div class="nav-links">
                <?php
                if ( $prev_link = get_previous_comments_link( __( 'Older Comments', 'law' ) ) ) :
                    printf( '<div class="nav-previous">%s</div>', $prev_link );
                endif;

                if ( $next_link = get_next_comments_link( __( 'Newer Comments', 'law' ) ) ) :
                    printf( '<div class="nav-next">%s</div>', $next_link );
                endif;
                ?>
            </div><!-- .nav-links -->
        </nav><!-- .comment-navigation -->
    <?php
    endif;
}



/**
 * Функция для вывода последних комментариев в WordPress.
 * ver: 0.1
 */
function kama_recent_comments( $args = array() ){
    global $wpdb;

    $def = array(
        'limit'      => 10, // сколько комментов выводить.
        'ex'         => 45, // n символов. Обрезка текста комментария.
        'term'       => '', // id категорий/меток. Включить(5,12,35) или исключить(-5,-12,-35) категории. По дефолту - из всех категорий.
        'gravatar'   => '', // Размер иконки в px. Показывать иконку gravatar. '' - не показывать.
        'user'       => '', // id юзеров. Включить(5,12,35) или исключить(-5,-12,-35) комменты юзеров. По дефолту - все юзеры.
        'echo'       => 1,  // выводить на экран (1) или возвращать (0).
        'comm_type'  => '', // название типа комментария
        'meta_query' => '', // WP_Meta_Query
        'meta_key'   => '', // WP_Meta_Query
        'meta_value' => '', // WP_Meta_Query
        'url_patt'   => '', // оптимизация ссылки на коммент. Пр: '%s?comments#comment-%d' плейсхолдеры будут заменены на $post->guid и $comment->comment_ID
    );

    $args = wp_parse_args( $args, $def );
    extract( $args );

    $AND = '';

    // ЗАПИСИ
    if( $term ){
        $cats = explode(',', $term );
        $cats = array_map('intval', $cats );

        $CAT_IN = ( $cats[ key($cats) ] > 0 ); // из категорий или нет

        $cats = array_map('absint', $cats ); // уберем минусы
        $AND_term_id = 'AND term_id IN ('. implode(',', $cats) .')';

        $posts_sql = "SELECT object_id FROM $wpdb->term_relationships rel LEFT JOIN $wpdb->term_taxonomy tax ON (rel.term_taxonomy_id = tax.term_taxonomy_id) WHERE 1 $AND_term_id ";

        $AND .= ' AND comment_post_ID '. ($CAT_IN ? 'IN' : 'NOT IN') .' ('. $posts_sql .')';
    }

    // ЮЗЕРЫ
    if( $user ){
        $users = explode(',', $user );
        $users = array_map('intval', $users );

        $USER_IN = ( $users[ key($users) ] > 0 );

        $users = array_map('absint', $users );

        $AND .= ' AND user_id '. ($USER_IN ? 'IN' : 'NOT IN') .' ('. implode(',', $users) .')';
    }

    // WP_Meta_Query
    $META_JOIN = '';
    if( $meta_query || $meta_key || $meta_value ){
        $mq = new WP_Meta_Query( $args );
        $mq->parse_query_vars( $args );
        if( $mq->queries ){
            $mq_sql = $mq->get_sql('comment', $wpdb->comments, 'comment_ID' );
            $META_JOIN = $mq_sql['join'];
            $AND .= $mq_sql['where'];
        }
    }

    $sql = $wpdb->prepare("SELECT * FROM $wpdb->comments LEFT JOIN $wpdb->posts ON (ID = comment_post_ID ) $META_JOIN
	WHERE comment_approved = '1' AND comment_type = %s $AND ORDER BY comment_date_gmt DESC LIMIT %d", $comm_type, $limit );

    //die( $sql );
    $results = $wpdb->get_results( $sql );

    if( ! $results ) return 'Комментариев нет.';

    // HTML
    $out = $grava = '';
    foreach ( $results as $comm ){
        if( $gravatar )
            $grava = get_avatar( $comm->comment_author_email, $gravatar );

        $comtext = strip_tags( $comm->comment_content );
        $com_url = $url_patt ? sprintf( $url_patt, $comm->guid, $comm->comment_ID ) : get_comment_link( $comm->comment_ID );

        $leight = (int) mb_strlen( $comtext );
        if( $leight > $ex )
            $comtext = mb_substr( $comtext, 0, $ex ) .' …';

        $out .= '
		<li>
			'. $grava .' <b>'. strip_tags( $comm->comment_author ) .':</b> 
			<a href="'. $com_url .'" title="к записи: '. esc_attr( $comm->post_title ) .'">'. $comtext .'</a>
		</li>';
    }

    if( $echo )
        return print $out;
    return $out;
}

function law_theme_option($name){ // данную функцию будем вызывать, когда будем выводить значение той или иной опции
    if (defined('FW')) { // если определена константа FW, то это значит, что фреймворк unison работает
        return fw_get_db_settings_option($name);
    }
    else{ // если фреймворк не подключен
            return $name;
    }
}

function _action_theme_wp_print_styles() {
    if (!defined('FW')) return; // prevent fatal error when the framework is not active

    $option_value = fw_get_db_settings_option('header-color');

    echo '<style type="text/css">'
        . '.fh5co-nav { '
        . 'background-color:'. esc_html($option_value) .'; '
        . '}'
        . '</style>';
}
add_action('wp_print_styles', '_action_theme_wp_print_styles');
