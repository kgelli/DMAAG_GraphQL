// TroyTable.js
const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'Troy',
    tableName: 'TROY',
    schema: 'DMAAG',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true,
        },
        rec_number: {
            type: 'varchar',
            nullable: true
        },
        source_pg: {
            type: 'varchar',
            nullable: true
        },
        source_fr: {
            type: 'varchar',
            nullable: true
        },
        enslaved_name: {
            type: 'varchar',
            nullable: true
        },
        enslaved_transrole: {
            type: 'varchar',
            nullable: true
        },
        enslaved_color: {
            type: 'varchar',
            nullable: true
        },
        enslaved_genagedesc: {
            type: 'varchar',
            nullable: true
        },
        enslaved_age: {
            type: 'varchar',
            nullable: true
        },
        enslaved_decage: {
            type: 'varchar',
            nullable: true
        },
        enslaved_est_birth: {
            type: 'varchar',
            nullable: true
        },
        enslaved_est_death: {
            type: 'varchar',
            nullable: true
        },
        enslaved_occ: {
            type: 'varchar',
            nullable: true
        },
        enslaved_health: {
            type: 'varchar',
            nullable: true
        },
        enslaved_unkchild: {
            type: 'varchar',
            nullable: true
        },
        enslaved_famno: {
            type: 'varchar',
            nullable: true
        },
        enslaved_famrel: {
            type: 'varchar',
            nullable: true
        },
        enslaver_business: {
            type: 'varchar',
            nullable: true
        },
        enslaver_businessrole: {
            type: 'varchar',
            nullable: true
        },
        enslaver_businessloc: {
            type: 'varchar',
            nullable: true
        },
        enslaver1_name: {
            type: 'varchar',
            nullable: true
        },
        enslaver1_trans_role: {
            type: 'varchar',
            nullable: true
        },
        enslaver1_loc: {
            type: 'varchar',
            nullable: true
        },
        enslaver2_name: {
            type: 'varchar',
            nullable: true
        },
        enslaver2_trans_role: {
            type: 'varchar',
            nullable: true
        },
        enslaver2_loc: {
            type: 'varchar',
            nullable: true
        },
        enslaver3_name: {
            type: 'varchar',
            nullable: true
        },
        enslaver3_trans_role: {
            type: 'varchar',
            nullable: true
        },
        enslaver3_loc: {
            type: 'varchar',
            nullable: true
        },
        enslaver4_name: {
            type: 'varchar',
            nullable: true
        },
        enslaver4_trans_role: {
            type: 'varchar',
            nullable: true
        },
        enslaver4_loc: {
            type: 'varchar',
            nullable: true
        },
        enslaver5_name: {
            type: 'varchar',
            nullable: true
        },
        enslaver5_trans_role: {
            type: 'varchar',
            nullable: true
        },
        enslaver5_loc: {
            type: 'varchar',
            nullable: true
        },
        enslaver6_name: {
            type: 'varchar',
            nullable: true
        },
        enslaver6_trans_role: {
            type: 'varchar',
            nullable: true
        },
        enslaver6_loc: {
            type: 'varchar',
            nullable: true
        },
        enslaver7_name: {
            type: 'varchar',
            nullable: true
        },
        enslaver7_trans_role: {
            type: 'varchar',
            nullable: true
        },
        enslaver7_loc: {
            type: 'varchar',
            nullable: true
        },
        trans_id: {
            type: 'varchar',
            nullable: true
        },
        trans_loc: {
            type: 'varchar',
            nullable: true
        },
        trans_type: {
            type: 'varchar',
            nullable: true
        },
        trans_record_date: {
            type: 'varchar',
            nullable: true
        },
        trans_begin_date: {
            type: 'varchar',
            nullable: true
        },
        trans_end_date: {
            type: 'varchar',
            nullable: true
        },
        transindv_value: {
            type: 'varchar',
            nullable: true
        },
        transgrp_value: {
            type: 'varchar',
            nullable: true
        },
        source_author: {
            type: 'varchar',
            nullable: true
        },
        source_title: {
            type: 'varchar',
            nullable: true
        },
        source_loc: {
            type: 'varchar',
            nullable: true
        },
        source_film_no: {
            type: 'varchar',
            nullable: true
        },
        url: {
            type: 'varchar',
            nullable: true
        },
        extractor: {
            type: 'varchar',
            nullable: true
        },
        url_1: {
            type: 'varchar',
            nullable: true
        },
        notes: {
            type: 'varchar',
            nullable: true
        }
    }
});