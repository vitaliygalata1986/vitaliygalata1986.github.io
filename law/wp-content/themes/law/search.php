<?php get_header() ?>

    <div id="fh5co-blog" class="fh5co-bg-section" style="background-color:#fcfcfc;">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <?php if( have_posts() ): // если есть посты ?>
                        <h1 class="page-title">
                            <?php
                            /* translators: %s: search query. */
                            printf( esc_html__( 'Search Results for: %s', 'law' ), '<span>' . get_search_query() . '</span>' ); // сюда будут выводиться результаты поиска для вот такого поискового запроса:  %s - т..е. вместо этого маркера подставится: get_search_query()
                            ?>
                        </h1>
                        <ul>
                            <?php while ( have_posts() ) : the_post(); // выводим сами мпосты?>
                                <li><a href="<?php the_permalink() ?>"><?php the_title() ?></a></li>
                            <?php endwhile; ?>
                        </ul>
                    <?php else: ?>
                        <p><?php _e('Nothing found', 'law') ?></p>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>

<?php get_footer() ?>



<?php get_header('main') ?>

<!-- breadcrumb start-->
<section class="breadcrumb breadcrumb_bg">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="breadcrumb_iner text-center">
                    <div class="breadcrumb_iner_item">
                        <h2>Our blog</h2>
                        <p>Home<span>//</span>blog</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- breadcrumb start-->


<!--================Blog Area =================-->
<section class="blog_area section_padding">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 mb-5 mb-lg-0">
                <div class="blog_left_sidebar">


                    <?php if ( have_posts()) : while ( have_posts()) : the_post(); ?>
                        <article class="blog_item">
                            <div class="blog_item_img">
                                <?php the_post_thumbnail('large',array('class' => 'card-img rounded-0'))?>
                                <a href="#" class="blog_item_date">
                                    <h3><?php the_time('j'); ?></time></h3>
                                    <p><?php the_time('F'); ?></p>
                                </a>
                            </div>

                            <div class="blog_details">
                                <a class="d-inline-block" href="<?php the_permalink()?>">
                                    <h2><?php the_title()?></h2>
                                </a>
                                <?php the_content('')?>
                                <ul class="blog-info-link">
                                    <li><a href="#"><i class="far fa-user"></i> Travel, Lifestyle</a></li>
                                    <li><a href="#"><i class="far fa-comments"></i> 03 Comments</a></li>
                                </ul>
                            </div>
                        </article>
                    <?php endwhile; ?>

                    <?php else: ?>
                        <p>Записей блога нет...</p>
                    <?php endif;?>

                    <nav class="blog-pagination justify-content-center d-flex">
                        <ul class="pagination">
                            <li class="page-item">
                                <a href="#" class="page-link" aria-label="Previous">
                                    <i class="ti-angle-left"></i>
                                </a>
                            </li>
                            <li class="page-item">
                                <a href="#" class="page-link">1</a>
                            </li>
                            <li class="page-item active">
                                <a href="#" class="page-link">2</a>
                            </li>
                            <li class="page-item">
                                <a href="#" class="page-link" aria-label="Next">
                                    <i class="ti-angle-right"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <?php get_sidebar()?>


        </div>
    </div>
</section>
<!--================Blog Area =================-->

<?php get_footer()?>
