<?php get_header(); ?>

<?php

$link = mysqli_connect("localhost", "vitaliy", "12345", "maps");

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$query = "SELECT * FROM uchzav,info WHERE uchzav.id=info.id";

if ($result = mysqli_query($link, $query)) {

    /* fetch associative array */

    while ($row = mysqli_fetch_assoc($result)) {

    }

    mysqli_free_result($result);
}

/* close connection */
mysqli_close($link);


?>

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
    <!-- post -->
    <?php the_content() ?>
<?php endwhile; ?>
    <!-- post navigation -->
<?php else: ?>
    <!-- no posts found -->
    <p>Постов нет...</p>
<?php endif;?>






<?php get_footer(); ?>

