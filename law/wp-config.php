<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'law');

/** Имя пользователя MySQL */
define('DB_USER', 'vitaliy');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', '12345');

/** Имя сервера MySQL */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8mb4');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'H4=u, AZ-Cj7`eBejO|9lK1-T8$={ OrhQ(W|Bq$eNS#nK1_(nME:6]Y!_:YcluP');
define('SECURE_AUTH_KEY',  'b)[j]AYT%R:(Gq|bwF&NN{[;pz8--`jz2HV^!aigL.r)qTqj~Sh@K&_;,F0wkKp#');
define('LOGGED_IN_KEY',    'V7F9RzC.5EaEd=A|o[gFq}6,2Ge1tY.,J$lKPi1J7<0)`lM5L%0J4pZ^B?[hu{pA');
define('NONCE_KEY',        'F5R%l9nu.%,3J0PE SI=!A[lztBhkR%e|op7Z(x x.xi XgOk;]5w!QiQi8FQ`_9');
define('AUTH_SALT',        'N!60A;AOY=a-,drzM1[[wGtiF>ftK&F/Uek3_<`H{:-*bZ[ZB)=t~xI@a@x][!i^');
define('SECURE_AUTH_SALT', '.YFR*}Hh.AgPpH1!GS2wJ94vg@fip}01)Mry[n:@n%ih6~dDDCik>oG|fjl2=Kaf');
define('LOGGED_IN_SALT',   'ys_5G6%];Ke#}JK^)UVJ+,*od7,}?P]AOcMXCH^FpE[b1v3bzK;BzzSETVki9vWc');
define('NONCE_SALT',       '4OJQ_[9~|%p5a4X$7 zI*ef}_0cS<xE&,&ZSdbm2r[Lwx0LOq1i9FZn=Ac3Y}8An');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
