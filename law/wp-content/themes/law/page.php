<?php get_header();?>

<div class="container-fluid p-0">
    <div class="row">
        <div class="col-md-12">
            <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                <!-- post -->
               <?php the_content()?>
            <?php endwhile; ?>
                <!-- post navigation -->
            <?php else: ?>
                <!-- no posts found -->
                <p>Постов нет...</p>
            <?php endif;?>
        </div>
    </div>
</div>

<?php get_footer();?>
