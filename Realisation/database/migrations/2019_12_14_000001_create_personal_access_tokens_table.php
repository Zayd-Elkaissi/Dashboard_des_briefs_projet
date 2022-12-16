<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     * 
     * 
     */
    // public function up()
    // {
        public function up()
    {
        Schema::table('users', function (Blueprint $table) {

                    //Adds an INTEGER type column, or one of its many variations
                    $table->integer('some_column_name');
                    $table->tinyInteger('some_column_name');
                    $table->smallInteger('some_column_name');
                    $table->mediumInteger('some_column_name');
                    $table->bigInteger('some_column_name');

                    //Adds an unsigned INTEGER type column, or one of its many variations
                    $table->unsignedBigInteger('some_column_name');
                    $table->unsignedInteger('some_column_name');
                    $table->unsignedMediumInteger('some_column_name');
                    $table->unsignedSmallInteger('some_column_name');
                    $table->unsignedTinyInteger('some_column_name');

                    // Adds a VARCHAR type column with an optional length
                    $table->integer('some_column_name', 'length');

                    // Adds a BLOB type column
                    $table->binary('some_column_name');

                    // Adds a BOOLEAN type column (a TINYINT(1) in MySQL)
                    $table->boolean('some_column_name');

                    // Adds a CHAR column with an optional length
                    $table->char('some_column_name', 'length');

                    // Adds a DATETIME column
                    $table->datetime('some_column_name');

                    // Adds a DECIMAL column, with precision and scale—for example, decimal('amount', 5, 2) specifies a precision of 5 and a scale of 2
                    $table->decimal('some_column_name', 'precision', 'scale');

                    // unsigned decimal
                    $table->unsignedDecimal('some_column_name');

                    // Adds a DOUBLE column—for example, double('tolerance', 12, 8) specifies 12 digits long, with 8 of those digits to the right of the decimal place, as in 7204.05691739
                    $table->decimaldouble('some_column_name', 'total_digits', 'digits_after_decimal');

                    //unsigned double
                    $table->unsignedDouble('some_column_name');

                    // Adds an ENUM column, with provided choices
                    $table->enum('some_column_name', ['choiceOne', 'choiceTwo']);

                    //Adds a FLOAT column (same as double in MySQL
                    $table->float('some_column_name', 'precision', 'scale');

                    // Adds unsinged float column
                    $table->unsignedFloat('some_column_name');

                    //Adds a JSON or JSONB column (or a TEXT column in Laravel 5.1)
                    $table->json('some_column_name');
                    $table->jsonb('some_column_name');

                    //Adds a TEXT column (or its various sizes)
                    $table->text('some_column_name');
                    $table->mediumText('some_column_name');
                    $table->longText('some_column_name');
                    $table->tinyText('some_column_name');

                    //Adds a TIME column
                    $table->time('some_column_name');

                    //Adds a TIMESTAMP column
                    $table->timestamp('some_column_name');

                    //Adds a UUID column (CHAR(36) in MySQL)
                    $table->uuid('some_column_name');

                    //“And these are the special (joined) Blueprint methods:

                    //“Add an unsigned incrementing INTEGER or BIG INTEGER primary key ID or one of its variations
                    $table->increments('some_column_name');
                    $table->bigIncrements('some_column_name');
                    $table->tinyIncrements('some_column_name');
                    $table->smallIncrements('some_column_name');
                    $table->mediumIncrements('some_column_name');

                    // Adds created_at and updated_at timestamp columns
                    $table->timestamps();
                    $table->nullableTimestamps();

                    //Adds a remember_token column (VARCHAR(100)) for user “remember me” tokens
                    $table->rememberToken();

                    // Adds a deleted_at timestamp for use with soft deletes
                    $table->softDeletes();

                    // Adds an integer some_column_name_id and a string some_column_name_type (e.g.,
                    //morphs(tag) adds integer tag_id and string tag_type); for use in polymorphic relationships
                    $table->morphs('some_column_name');


    });
// }

        Schema::create('personal_access_tokens', function (Blueprint $table) {
            $table->id();
            $table->morphs('tokenable');
            $table->string('name');
            $table->string('token', 64)->unique();
            $table->text('abilities')->nullable();
            $table->timestamp('last_used_at')->nullable();
            $table->timestamp('expires_at')->nullable();
            $table->timestamps();

            
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('personal_access_tokens');
    }
};
